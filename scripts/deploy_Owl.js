const { ethers } = require("hardhat");
const config = require("../hardhat.config.js");

async function main() {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory("MajesticOwl");
  const instance = await contract.deploy(
    config.nft.name,
    config.nft.symbol,
    config.uri,
    config.uri,
    config.MOPS,
  );

  console.log("MajesticOwl deployed to:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
