//makes it so we can reference contract as an artifacts on front end code
//artifacts are accessible contracts from ABI via web3js
var Greeter = artifacts.require("./Greeter.sol");
module.exports = function(deployer) {
    deployer.deploy(Greeter);
};
