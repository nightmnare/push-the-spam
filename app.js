require('dotenv').config()

const { ethers } = require("ethers");
const ABI = require("./abi.json");
const RPC = "https://dataseed2.redlightscan.finance/";
// contract address
const address = "0x8cc144Ea3341BB3d3d28002620E1d51d680DE7D8";
const provider = new ethers.providers.JsonRpcProvider(RPC);
// Make sure to change PKs in ENV file
const signer = new ethers.Wallet(process.env.PK, provider);


// create contract object using address, abi, and the provider
const contract = new ethers.Contract(address, ABI, signer);



//To create attach another contract just create the contract object 

const main = async () => {
  setInterval(async () => {
    // replace with the function you need to call

    const owner = await contract.poke(50)
    console.log(owner);


    
    // 4000 = 4 seconds
  }, 4000);
};

main();
