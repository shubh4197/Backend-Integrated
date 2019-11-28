pragma solidity >=0.4.22 <0.6.0;//any version of comiler between 0.4.22 and 0.6.0
contract payment{
    //declaring variables for balance tracking and admin address
    
    address admin;
    mapping (address=> uint) balances;
    event transfer(address sender,address recipient,uint amount);
    
    //constructor call
    constructor() public{
        //assigning admin address to be the sender/initiator of the contract
        
        admin=msg.sender;
    }
    //buying more currency
    function buyCurrency(address self,uint amount) public{
    
    //check if the address is of the admin, if not, function is discarded
    if(self!=admin)return;
    
    //getting currency and adding to balances of admin
    balances[self]+=amount;
    }
    
    //for the actual transfer of money to address secified
    function moneyTransfer(address recipient, uint amount) public returns (bool){
        //check if admin has sufficient balance
        if(balances[admin]<amount) return false;
        balances[admin]-=amount;
        balances[recipient]+=amount;
        emit transfer(admin, recipient, amount);
    }
    //to check balance in particular account address
    function checkBalance(address account) public view returns (uint){
        return balances[account];
    }
}