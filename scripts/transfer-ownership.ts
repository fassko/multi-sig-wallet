import { upgrades } from "hardhat";

async function main () {
  const gnosisSafe = '0x483A0546Bc5F4e7683055642b27d1aFcf7c33704';

  console.log('Transferring ownership of ProxyAdmin...');
  await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
  console.log('Transferred ownership of ProxyAdmin to:', gnosisSafe);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });