async function main() {
    // Grab the contract factory 
    const MyContract = await ethers.getContractFactory("MatchBoXNFTLogic");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myContract = await MyContract.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", myContract.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });