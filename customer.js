// Create a RecordCollector (or customer) constructor who can buy and sell records.
var _ = require("lodash")

var Customer = function(name, balance){
  this.name = name;
  this.balance = balance;
}

Customer.prototype = {

  buyRecord: function(record){

  }


  sellRecord: function(record){
    
  }
},



module.exports = Customer 