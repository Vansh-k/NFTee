const har = require ("hardhat");

async function main() {

  const contract = await har.ethers.deployContract("NFTee");

  const deployedContract = await contract.waitForDeployment();

  console.log("address of deployed contract is : ", contract.target);
}


main()
.then(() => process.exit(0))
.catch((err) => {
  console.log(err);
  process.exit(1);
})