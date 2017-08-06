pragma solidity ^0.4.13;

contract Greeter {

    //creating a string variable string
    string greeting;

    //constructor for contract
    function greeter(string _greeting) public {
         greeting = _greeting;
    }

    function greet() constant returns (string) {
        return greeting;
    }
}
