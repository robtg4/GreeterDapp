//Migrations in Truffle specify which contracts will be deployed by
//truffle migrate and where they are located
//can move from testing to main deployment by changing this file
module.exports = {
 networks: {
   development: {
     host: "localhost",
     port: 8545,
     network_id: "*" // Match any network id
   }
 }
};


/*
TESTING DEPLOYMENT CONDITIONS 
module.exports = {
 networks: {
   development: {
     host: "localhost",
     port: 8545,
     network_id: "*" // Match any network id
   }
 }
};

*/
