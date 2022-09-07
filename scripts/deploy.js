// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const Contract = await hre.ethers.getContractFactory("ChainBattles");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log("ChainBattles deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });