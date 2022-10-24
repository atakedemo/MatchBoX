async function main() {
    // Grab the contract factory 
    const MyContract = await ethers.getContractFactory("MatchBoXNFT");
 
    // Start deployment, returning a promise that resolves to a contract object
    //const myContract = await MyContract.deploy(); // Instance of the contract 
    const myContract = await MyContract.deploy("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"); // Instance of the contract 
    console.log("Contract deployed to address:", myContract.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });