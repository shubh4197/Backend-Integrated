module.exports = {
  networks : {
    ganache : {
      host : 'localhost',
      port : 9545,   
      network_id : "*"
    }
  },

  compilers: {
    solc: {
      version: "0.4.25"
    }
  }
};