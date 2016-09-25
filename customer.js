// Create a RecordCollector (or customer) constructor who can buy and sell records.
var _ = require("lodash")

var Customer = function(name, balance){
  this.name = name;
  this.balance = balance;
  this.collection = [];
}

Customer.prototype = {
  add: function(record) {
    this.records.push(record);
  },
  
  buy: function(recordStore, record) {
    recordStore.remove(record);
    this.add(record);
    recordStore.balance += record.price;
    this.budget -= record.price;
  },
  sell: function(recordStore, record) {
    recordStore.add(record);
    this.remove(record);
    recordStore.balance -= record.price;
    this.budget += record.price;
  }

}



module.exports = Customer 