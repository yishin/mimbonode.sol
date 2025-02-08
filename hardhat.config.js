require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: process.env.MAINNET_PRIVATE_KEY
        ? [process.env.MAINNET_PRIVATE_KEY]
        : [],
      chainId: parseInt(process.env.CHAIN_ID || "56"), // BSC 메인넷 체인 ID
    },
    qa: {
      url: process.env.QA_RPC_URL, // 메인넷 RPC 사용
      accounts: process.env.QA_PRIVATE_KEY ? [process.env.QA_PRIVATE_KEY] : [],
      chainId: parseInt(process.env.CHAIN_ID || "56"), // BSC 메인넷 체인 ID
    },
    testnet: {
      url: process.env.TESTNET_RPC_URL,
      accounts: process.env.TESTNET_PRIVATE_KEY
        ? [process.env.TESTNET_PRIVATE_KEY]
        : [],
      chainId: parseInt(process.env.TESTNET_CHAIN_ID || "97"), // BSC 테스트넷 체인 ID
    },
  },
};
