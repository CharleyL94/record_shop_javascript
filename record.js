// Create a constructor to create Record objects with artist, title, price
// Create some new records

var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
}

var record = new Record();

module.exports = Record