// Create a RecordStore that has a name, city and multiple records in it's inventory
// Give the RecordStore a balance i.e. cash in bank.
// Add some records to your RecordStore.
// Create a method that lists the inventory.
// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// Create a method that reports on the financial situation of the store. Cash and value of inventory.
var _ = require("lodash")

var RecordShop = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = balance;
}
RecordShop.prototype = {
  add: function(record){
    this.records.push(record);

  },

// functions not working
// findByArtist: function(artist){
//   var record = _.find(this.records, { "artist": artist});
//     return record
//   },

// findByTitle: function(title){
//   var record = _.find(this.records, {"title": title});
//   return record
// },


listInventory: function(){
  var newArray = this.records.map(function(item){
    return "Artist: " + item['artist'] + ", Title: " + item['title'] + ", Price: " + item['price'];
       });
        var sortedArray = _.sortBy(newArray, ['title']);
        var result = sortedArray.join('\n');
        return result;
      }

}

module.exports = RecordShop