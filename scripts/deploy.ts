import { ethers } from "hardhat";

async function main() {
  const LuckyNumber = await ethers.getContractFactory("LuckyNumber");
  const luckyNumber = await LuckyNumber.deploy();

  await luckyNumber.deployed();

  console.log("Deployed", luckyNumber.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
