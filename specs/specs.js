var assert = require('assert');
var Customer = require('../customer');
var Record = require('../record');
var RecordShop = require ('../record_shop');

describe ('Record', function() {
  var record1;

  beforeEach(function(){
    record1 = new Record("Spice Girls", "Say youll be there", 3.99);

  });

  it('record should have artist', function(){
    // var record = new Record ("Spice Girls");
    assert.equal("Spice Girls", record1.artist );
  });

  it('record should have title', function(){
    // var record =  new Record ("Spice Girls", "Say youll be there");
    assert.equal("Say youll be there", record1.title);
  });

  it('record should have a price', function(){
    // var record = new Record (3.99);
    assert.equal(3.99, record1.price);
  });

})

describe ('RecordShop', function(){
  var recordShop;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    recordShop = new RecordShop("Charleys Collection", "Edinburgh", 1000);
    record1 = new Record("Spice Girls", "Say youll be there", 3.99);
    record2 = new Record("Spice Girls", "2 become 1", 5.99);
    record3 = new Record("NSYNC", "Bye Bye Bye", 4.00);

  });

  it('record should have a name', function(){
    assert.equal("Charleys Collection", recordShop.name);
  });

  it('should have a city', function(){
    assert.equal("Edinburgh", recordShop.city);
  });

  it('should have a balance', function(){
    assert.equal(1000, recordShop.balance)
  });

  it('should be able to add record', function(){
    recordShop.add(record1)
    assert.equal(1, recordShop.records.length)
  });

  it('list records in stock', function(){
    recordShop.add(record1)
    recordShop.add(record2)
    recordShop.add(record3)
    console.log(recordShop.listInventory())
  });

  // it('can find record by artist', function(){
  //   assert.deepEqual(record1, recordShop.findByArtist("Spice Girls"))
  // });


  // it('can find record by title', function(){
  //   assert.deepEqual(record2, recordShop.findByTitle("2 become 1"))
  // });

  it('sell record',function(){
    recordShop.add(record1)
    recordShop.sellRecord(record1)
    assert.equal(recordShop.balance, 1003.99)
  });

})

describe( Customer,function(){
  var record1;

  beforeEach(function(){

    record1 = new Record("Beyonce", "Halo", 6);
  })
  
})