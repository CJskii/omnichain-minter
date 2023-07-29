import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Mint from "../components/Mint";
import Bridge from "../components/Bridge";
import { useState } from "react";

const Home: NextPage = () => {
  const [mintId, setMintId] = useState(0);
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center items-center gap-4">
        <Mint setMintId={setMintId} />
        <Bridge mintId={mintId} setMintId={setMintId} />
      </main>

      <footer className="bg-base-200 min-w-full p-4 flex justify-center items-center">
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by CJski
        </a>
      </footer>
    </div>
  );
};

export default Home;
