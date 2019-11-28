import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

 // import * as TruffleContract from 'truffle-contract';


declare let require: any;
declare let window: any;
declare let global: any;
const tokenAbi = require('../../../Blockchain-artifacts/build/contracts/payment.json');

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  private web3Provider: null;
  private contracts: {};

  constructor() {

    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
    }

    window.web3 = new Web3(this.web3Provider);

  }
  accountCreation(username, password) {

    const createdAddress = window.web3.personal.newAccount(username + password);
    console.log(createdAddress);
    return createdAddress;

  }

  checkBalance(address) {
    console.log('balance:' + window.web3.eth.getBalance(address));
  }

  makePayment(fromAddress, toAddress, amount) {

    window.web3.eth.sendTransaction({
      from: fromAddress,
      to: toAddress,
      value: amount
    });
    console.log('Payment Done');
  }
}
