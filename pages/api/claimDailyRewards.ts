import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";
import { differenceInCalendarDays, parseISO, isToday } from "date-fns";

const fetchUserData = async (ethereumAddress: string) => {
  const user = await prisma.user.findUnique({
    where: { ethereumAddress },
    select: {
      totalPoints: true,
      lastRewardClaimedAt: true,
      currentRewardDay: true,
    },
  });
  return user;
  return await prisma.user.findUnique({
    where: { ethereumAddress },
    select: {
      totalPoints: true,
      lastRewardClaimedAt: true,
    },
  });
};

const checkIfUserClaimedRewardToday = (user: any) => {
  if (!user.lastRewardClaimedAt) {
    return false;
  }

  return isToday(new Date(user.lastRewardClaimedAt));
};

const calculateNextReward = (user: any) => {
  const today = new Date();
  const lastClaimedDate = parseISO(user.lastRewardClaimedAt.toISOString());
  const daysDifference = differenceInCalendarDays(today, lastClaimedDate);

  let nextRewardDay = user.currentRewardDay;

  if (daysDifference > 1) {
    nextRewardDay = 1;
  } else if (daysDifference === 1) {
    nextRewardDay = nextRewardDay;
  } else {
    nextRewardDay = 1;
  }
  return nextRewardDay;
};

const calculateNextDayRewardDay = (dailyReward: any) => {
  const claimedRewardDay = dailyReward.day;
  let nextRewardDay = claimedRewardDay < 8 ? claimedRewardDay + 1 : 8;
  return nextRewardDay;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { ethereumAddress } = req.body;

  try {
    const user = await fetchUserData(ethereumAddress);

    console.log(user);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    // Check if the user has already claimed their reward today
    if (checkIfUserClaimedRewardToday(user)) {
      return res.status(400).json({
        status: "error",
        message: "Reward already claimed today",
      });
    }

    console.log(checkIfUserClaimedRewardToday(user));

    // Calculate the new reward day
    const claimRewardDay = calculateNextReward(user);

    // Fetch the daily reward for the new reward day
    const dailyReward = await prisma.dailyReward.findUnique({
      where: { day: claimRewardDay },
    });

    const nextRewardDay = calculateNextDayRewardDay(dailyReward);

    if (!dailyReward) {
      return res.status(400).json({
        status: "error",
        message: "Error claiming reward",
      });
    }

    // Update the user's total points and current reward day
    const updatedUser = await prisma.user.update({
      where: { ethereumAddress },
      data: {
        totalPoints: {
          increment: dailyReward.points,
        },
        currentRewardDay: nextRewardDay,
        lastRewardClaimedAt: new Date(),
      },
    });

    // TODO: Add logic to record this in UserDailyReward table

    res.status(200).json({
      status: "success",
      message: "Reward claimed successfully",
      data: {
        dailyReward,
        newRewardDay: updatedUser.currentRewardDay,
        lastRewardClaimedAt: new Date(),
        totalPoints: updatedUser.totalPoints,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}
