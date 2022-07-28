import { defender, ethers } from "hardhat";

async function main() {
const proxyAddress = '0x2a9C8BB990ac89A462beEeaD426763a7Bb1A8980';

const LuckyNumber = await ethers.getContractFactory("LuckyNumber");
console.log("Preparing proposal...");
const proposal = await defender.proposeUpgrade(proxyAddress, LuckyNumber);
console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })