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

//  not working
// findByArtist: function(artist){
//   var record = _.find(this.records, { "artist": artist});
//     return record
//   },

// not working
// findByTitle: function(title){
//   var record = _.find(this.records, ["title", title]);
//   return record;
// },


listInventory: function(){
  var newArray = this.records.map(function(item){
    return "Artist: " + item['artist'] + ", Title: " + item['title'] + ", Price: " + item['price'];
       });
        var sortedArray = _.sortBy(newArray, ['title']);
        var result = sortedArray.join('\n');
        return result;
      },

sellRecord: function(record){
  var index = this.records.indexOf(record);
  this.records.splice(index,1);
  this.balance += record.price;
}

}

module.exports = RecordShop