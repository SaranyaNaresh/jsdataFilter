/**
 * Created by saranyas on 20-02-2017.
 */
var JSData = require('js-data');
var DSMongoDBAdapter = require('js-data-mongodb');

var store = new JSData.DS();
var adapter = new DSMongoDBAdapter('mongodb://12345:67890@ds145289.mlab.com:45289/sampledb');

// "store" will now use the MongoDB adapter for all async operations
store.registerAdapter('mongodb', adapter, { default: true });

var tab = store.defineResource({
    // Resource name is required
    name: 'tab',

    // Why couldn't Mongo just use "id"?
    idAttribute: '_id',

    // map this resource to a collection, default is Resource#name
    table: 'privilege'
});


tab.findAll({

    role: {
        '==': 'DESIGNENGINEER'
    }

}).then(function(result) {
    result.forEach(function(x){
        console.log(x.name);
    })

});

