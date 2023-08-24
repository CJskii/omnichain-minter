// TODO: Figure out why Mantle and zkEVM are not working
// TODO: test Metis and Mantle from the backend calls

export const networkTransferMappings: { [key: string]: string[] } = {
  "Polygon zkEVM Testnet": [
    "Goerli",
    // "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  Sepolia: [
    "Goerli",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    // "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
    "Arbitrum",
    "Optimism",
  ],
  Goerli: [
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    "Mantle Testnet",
    "Metis Goerli",
  ],
  "Arbitrum Goerli": [
    "Goerli",
    "Sepolia",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    // "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  "Optimism Goerli": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    // "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  "Base Goerli": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    // "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  "Linea Goerli Testnet": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Binance Smart Chain Testnet",
    // "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  "Binance Smart Chain Testnet": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    // "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  "Polygon Mumbai": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    // "Polygon zkEVM Testnet",
    // "Mantle Testnet",
    "Metis Goerli",
  ],
  "Mantle Testnet": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    "Metis Goerli",
  ],
  "Metis Goerli": [
    "Goerli",
    "Sepolia",
    "Arbitrum Goerli",
    "Optimism Goerli",
    "Base Goerli",
    "Linea Goerli Testnet",
    "Binance Smart Chain Testnet",
    "Polygon zkEVM Testnet",
    "Polygon Mumbai",
    "Mantle Testnet",
  ],

  // MAINNET MAPPINGS
  Base: [
    "Linea",
    "Arbitrum One",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Avalanche",
    "Fantom",
    "Kava",
    "Moonriver",
  ],
  "OP Mainnet": [
    "Base",
    "Linea",
    "Arbitrum One",
    "Arbitrum Nova",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Core Dao",
    "Gnosis",
    "Avalanche",
    "Canto",
    "Fantom",
    "Harmony",
    "Celo",
    "Kava",
    "Sepolia",
    "DFK",
    "Moonbeam",
    "Moonriver",
    "Fuse",
    "Tenet",
    "Meter.io",
    "Loot",
    "Beam",
  ],
  "Arbitrum One": [
    "Base",
    "Linea",
    "Arbitrum Nova",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Core Dao",
    "Gnosis",
    "Avalanche",
    "Canto",
    "Fantom",
    "Harmony",
    "Celo",
    "Kava",
    "Sepolia",
    "DFK",
    "Moonbeam",
    "Moonriver",
    "Fuse",
    "OKT (OKX)",
    "Tenet",
    "Meter.io",
    "Loot",
    "Beam",
  ],
  "BNB Smart Chain": [
    "Base",
    "Linea",
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "zkSync Era",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Core Dao",
    "Gnosis",
    "Avalanche",
    "Canto",
    "Fantom",
    "Harmony",
    "Celo",
    "Kava",
    "DFK",
    "Moonbeam",
    "Moonriver",
    "Fuse",
    "OKT (OKX)",
    "Tenet",
    "Meter.io",
    "Loot",
    "Beam",
  ],
  Polygon: [
    "Base",
    "Linea",
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Core Dao",
    "Gnosis",
    "Avalanche",
    "Canto",
    "Fantom",
    "Harmony",
    "Celo",
    "Kava",
    "DFK",
    "Moonbeam",
    "Moonriver",
    "Fuse",
    "OKT (OKX)",
    "Tenet",
    "Meter.io",
    "Loot",
    "Beam",
  ],
  "Polygon zkEVM": [
    "Base",
    "Linea",
    "Arbitrum One",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Metis",
    "Mantle",
    "Gnosis",
    "Avalanche",
    "Fantom",
    "Celo",
    "Kava",
  ],
  Mantle: [
    "Base",
    "Linea",
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Avalanche",
    "Fantom",
  ],
  Metis: [
    "Base",
    "Linea",
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Mantle",
    "Gnosis",
    "Avalanche",
    "Canto",
    "Fantom",
    "Kava",
    "Moonriver",
    "Fuse",
    "Klaytn",
    "Tenet",
    "Meter.io",
  ],
  Linea: [
    "Base",
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Avalanche",
    "Fantom",
    "Kava",
  ],

  "Core Dao": [
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Avalanche",
  ],

  Gnosis: [
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Avalanche",
    "Fantom",
    "Celo",
    "Fuse",
    "Klaytn",
  ],
  Avalanche: [
    "Base",
    "Linea",
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Core Dao",
    "Gnosis",
    "Canto",
    "Fantom",
    "Harmony",
    "Celo",
    "Kava",
    "DFK",
    "Dexalot",
    "Moonbeam",
    "Moonriver",
    "Fuse",
    "Klaytn",
    "OKT (OKX)",
    "Tenet",
    "Meter.io",
    "Loot",
    "Beam",
  ],
  Fantom: [
    "Base",
    "Linea",
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Mantle",
    "Gnosis",
    "Avalanche",
    "Canto",
    "Harmony",
    "Celo",
    "Kava",
    "DFK",
    "Moonbeam",
    "Moonriver",
    "Tenet",
    "Meter.io",
    "Beam",
  ],
  Canto: [
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "zkSync Era",
    "BNB Smart Chain",
    "Polygon",
    "Metis",
    "Avalanche",
    "Fantom",
    "Tenet",
    "Meter.io",
  ],
  Harmony: [
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Avalanche",
    "Fantom",
    "DFK",
    "Moonbeam",
  ],
  Celo: [
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Gnosis",
    "Avalanche",
    "Fantom",
    "Fuse",
  ],
  Kava: [
    "Base",
    "Linea",
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Polygon zkEVM",
    "Metis",
    "Avalanche",
    "Fantom",
    "Moonriver",
  ],
  Moonbeam: [
    "Arbitrum One",
    "Arbitrum Nova",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Avalanche",
    "Fantom",
    "Harmony",
    "DFK",
  ],
  Moonriver: [
    "Base",
    "Arbitrum One",
    "OP Mainnet",
    "BNB Smart Chain",
    "Polygon",
    "Metis",
    "Avalanche",
    "Fantom",
    "Kava",
  ],
};
