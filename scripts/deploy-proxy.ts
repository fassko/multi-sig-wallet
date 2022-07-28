import { ethers, upgrades } from "hardhat";

async function main() {
  const LuckyNumber = await ethers.getContractFactory("LuckyNumber");
  const luckyNumber = await upgrades.deployProxy(LuckyNumber);

  await luckyNumber.deployed();

  console.log("Deployed", luckyNumber.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
