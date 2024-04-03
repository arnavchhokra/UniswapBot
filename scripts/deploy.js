
const { ethers } = require("hardhat");


async function main() {
    try {
        const [owner] = await ethers.getSigners();
        const ERC20TOKEN = await ethers.getContractFactory("TestToken");
        const tokenContract = await ERC20TOKEN.deploy("TestToken", "TEST", ethers.utils.parseEther("3000000000"));
        await tokenContract.deployed();
        console.log("Test Token deployed to", tokenContract.address);
        console.error(error);
        process.exit(1);
    }
}


main()
.then(()=>{

})
.catch((error)=>{
    console.log(error)
    process.exit(1)
})