async function main() {
  const [deployer] = await ethers.getSigners();
  const network = hre.network;

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Network:", network.name);
  console.log("Chain ID:", network.config.chainId);

  // 네트워크에 따라 다른 컨트랙트 배포
  let TokenContract;
  if (network.name === "mainnet") {
    TokenContract = await ethers.getContractFactory("MIMGToken");
    console.log("Deploying MIMG Token...");
  } else if (network.name === "qa") {
    TokenContract = await ethers.getContractFactory("MGToken");
    console.log("Deploying MG QA Token...");
  } else if (network.name === "testnet") {
    TokenContract = await ethers.getContractFactory("MIMGToken");
    console.log("Deploying MIMG Token on Testnet...");
  } else {
    throw new Error("Invalid network");
  }

  const token = await TokenContract.deploy();
  await token.deployed();

  console.log("Token address:", token.address);
  console.log("Token name:", await token.name());
  console.log("Token symbol:", await token.symbol());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
