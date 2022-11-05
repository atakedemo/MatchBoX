async function main() {
    // Grab the contract factory 
    const MyContract = await ethers.getContractFactory("MatchBoXNFT");
 
    // Start deployment, returning a promise that resolves to a contract object
    //const myContract = await MyContract.deploy(); // Instance of the contract 
    const myContract = await MyContract.deploy("0x24fc344e49105fe55A9709f0B76bd5D9aC4FF6F8"); // Instance of the contract 
    console.log("Contract deployed to address:", myContract.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });