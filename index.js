// Modules to run html server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Extract and parse data from webpage
const bodyParser = require('body-parser');


// Web3 Ethereum Packages
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545');
console.log(web3);
console.log("*******************");

var sendFrom = '0x3Df0DE75166e2289947248f8dAd5C2583116c82f';
var sendTo = '0x8611C1C35f04fdBDb1d1f548c5cd59a5666c6a66';
var sendEther = "1";

var transaction = {
    from: sendFrom,
    to: sendTo,
    value: web3.utils.toWei(sendEther, "ether")
}

function fun() {
    web3.eth.sendTransaction(transaction)
    .then(function(receipt) {
        console.log(`Sent ${sendEther} ETH from: ${sendFrom} to: ${sendTo}`);
        foo();
    });
}

function foo() {
    web3.eth.getBalance(sendFrom).then(function(balance) {
        ethBalance = web3.utils.fromWei(balance, "ether");
        console.log(ethBalance);
        if (parseFloat(ethBalance) > 22) {
            fun();
        }
    });
}

web3.eth.getBalance(sendFrom).then(function(balance) {
    console.log(web3.utils.fromWei(balance, "ether"));
});

foo();