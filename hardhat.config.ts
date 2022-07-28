import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-defender";

import Dotenv from "dotenv";

Dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.GOERLI_PRIVATE_KEY ?? ""]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  defender: {
    apiKey: process.env.DEFENDER_TEAM_API_KEY ?? "",
    apiSecret: process.env.DEFENDER_TEAM_API_SECRET_KEY ?? "",
  }
};

export default config;
