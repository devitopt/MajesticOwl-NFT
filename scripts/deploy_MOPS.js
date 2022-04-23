const { ethers } = require("hardhat");
const config = require("../hardhat.config.js");

async function main() {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory("MOPS");
  const instance = await contract.deploy(
    config.payees.address,
    config.payees.percentage
  );

  console.log("MOPS deployed to:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
