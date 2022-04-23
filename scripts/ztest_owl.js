const { ethers } = require("hardhat");

async function main() {
  const test = await ethers.getContractAt(
    "MajesticOwl",
    '0xE2d2107af56ad92D07B0CEF2c6acacE984643392'
  );
  // console.log(await test.baseURI());
  // await test.setHiddenURI('hidden');
  await test.setPayments('0x288fd234FC5636C53878BC1F8De4c30651e6CC61');

  // const accounts = await ethers.getSigners();
  // const contractOwner = accounts[0];
  // console.log(await test.connect(contractOwner).baseURI());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
