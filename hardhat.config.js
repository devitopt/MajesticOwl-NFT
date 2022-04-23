require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const accounts = [process.env.PRIVATE_KEY];
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  payees: {
    address: [
      "0x5bE2d9b291C13073B945EFB242303C4784026286",
      "0xF2A7Aa73b5a5e3Bd33f61F988F9c7b02A5Dc2754",
      "0xA8F4eB2D2e9d7F332ebD8D4eD1B87BcBB1141fB9",
      "0xD6c0Cb2a9674211dD2043a98efb0ed35e870f4c5",
      "0xA508FA21Dad025908C7e7Ab478a77F1a0812cEac",
      "0xE91b43281Fe3aDfC9B3e57D34F7f984aB6cDEb4b",
      "0xA6faEEe057f8CFD25F98F130576892aF3dE8f9c7",
    ],
    percentage: [400, 100, 150, 125, 125, 75, 25],
  },
  nft: {
    name: "Majestic Owl Club",
    symbol: "MOWL",
  },
  uri: "baseUri",
  MOPS: "",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts,
      chainId: 4,
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts,
      chainId: 137,
    },
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  uri: accounts[0],
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
