
//import web3 so we can use the api
import Web3 from 'web3';

//Set our Ethereum client TestRPC
const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//Set our greeterABI and greeterAddress
var greeterABI =
[{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]

var greeterAddress = '0x06a5cac2c3156d1e5054aef9299668a475b90632';

//Set our greeterContract variable and export it
const greeterContract = ETHEREUM_CLIENT.eth.contract(greeterABI).at(greeterAddress);
export {greeterContract};

//TL;DR it’s a bunch of web3 api method calls that help point our front end to our deployed greeter contract.
