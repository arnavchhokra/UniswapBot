require("@nomicfoundation/hardhat-toolbox");

const { privateKey, infuraProjectId } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
networks: {
  sepolia: {
    url: `https://sepolia.infura.io/v3/${infuraProjectId}`,
    accounts: [`0x${privateKey}`]
  },
  mainnet: {
    url: `https://mainnet.infura.io/v3/${infuraProjectId}`,
    accounts: [`0x${privateKey}`]
  }
}
};
