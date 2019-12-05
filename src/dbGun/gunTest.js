
// //======================================= GUN SUMMARY =============================================== 

// //import gun
// var Gun = require('gun');
// var data = require('../redux/data')
// //init gun
// var gun = Gun()

// //put-> Save data into gun, syncing it with your connected peers.
// //gun.get('key').put({hello: "world"}, function(ack){}) 
// // gun.get('survey').get('submission').put(submission, function(ack){
// //     if(ack.err){
// //       return ui.show.error(ack.err)
// //     }
// //     ui.show.success(true)
// //   })

// //get-> Where to read data from.
// //gun.get('key').get('property', function(ack){}) 
// // gun.get(key, function(ack){
// //     if(ack.err){
// //       server.log(error)
// //     } else
// //     if(!ack.put){
// //       // not found
// //     } else {
// //       // data!
// //     }
// //   })

// //opt
// //gun.opt({peers: ['http://anotherdomain.com/gun']})
// // gun.opt({
// //     uuid: function () {
// //       return Math.floor(Math.random() * 4294967296);
// //     }
// //   });

// //back -> Every time a new chain is created, a reference to the old context is kept to go back to
// // gun.get('users')
// //   /* now change the context to alice */
// //   .get('alice')
// //   .put(data)
// //   /* go back up the chain once, to 'users' */
// //   .back().map(...)
// // gun.get('player').get('game').get('score').back(1)
// // // is the same as...
// // gun.get('player').get('game')

// //gun.on(callback, option) -> Subscribe to updates and changes on a node or property in realtime.
// // gun.get('users').get(username).on(function(user){
// //     // update in real-time
// //     if (user.online) {
// //       view.show.active(user.name)
// //     } else {
// //       view.show.offline(user.name)
// //     }
// //   })


// //gun.once(callback, option) -> Get the current data without subscribing to updates. Or undefined if it cannot be found.
// // Option wait controls the asynchronous timing  gun.get('foo').once(cb, {wait: 0})


// //gun.set(data, callback) -> Add a unique item to an unordered list.
// //To remove items from a set, use gun.unset.
// // var gun = Gun();
// // var bob = gun.get('bob').put({name: "Bob"});
// // var dave = gun.get('dave').put({name: "Dave"});

// // dave.get('friends').set(bob);
// // bob.get('friends').set(dave);


// //gun.map(callback) -> Map iterates over each property and item on a node, 
// // passing it down the chain, behaving like a forEach on your data.
// // It also subscribes to every item as well and listens for newly inserted items. It accepts one argument:
// // a callback function that transforms the data as it passes through.
// // If the data is transformed to undefined it gets filtered out of the chain.
// // the callback gets two arguments (value,key)
// // and will be called once for each key value pair in the objects that are returned from map.

// //"NOT SUPPORTED BY DEFAULT" -> require('gun/lib/*.js') CHANGE * TO WHATEVER YOU NEED NOT ,OPEN ,PATH ...

// // gun.path(key) -> The key property is the name of the field to move to.
// //gun.get('settings').path('themes').path('active')
// // shorthand
// // gun.get('settings').path('themes.active')



// // gun.not(callback) -> If you need to know whether a property or key exists, you can check with .not
// //It will consult the connected peers and invoke the callback
// // if there's reasonable certainty that none of them have the data available.


// //gun.open(callback) ->


// // var alice = gun.get('alice').put({name: 'alice', age: 22});
// // var bob = gun.get('bob').put({name: 'bob', age: 24});
// // var carl = gun.get('carl').put({name: 'carl', age: 16});
// // var dave = gun.get('dave').put({name: 'dave', age: 42});

// // // alice.on(function(node){
// // //     console.log('Subscribed to Alice!', node);
// // //   });
  
// // //   gun.get('bob').once(function(node){
// // //     console.log('Bob!', node);
// // //   });

//   var people = gun.get('people');
//   people.set(alice);
//   people.set(bob);
//   people.set(carl);
//   people.set(dave);

//   people.map().once(function(person){
//     console.log("The person is", person); 
//   });

// //   var company = gun.get('startup').put({
// //     name: "hype",
// //     profitable: false,
// //     address: {
// //       street: "123 Hipster Lane",
// //       city: "San Francisco",
// //       state: "CA",
// //       country: "USA"
// //     }
// //   });

// // //   company.once(function(startup){
// // //   console.log("The startup:", startup);
// // // });

// // var employees = company.get('employees');
// // employees.set(dave);
// // employees.set(alice);
// // employees.set(bob);

// // alice.get('spouse').put(bob);
// // bob.get('spouse').put(alice);

// // alice.get('spouse').get('employer').put(company);
// // alice.get('employer').put(company);

// // dave.get('kids').set(carl);
// // carl.get('dad').put(dave);

// // carl.get('friends').set(alice);
// // carl.get('friends').set(bob);

// // gun.get('alice').get('spouse').get('employer').get('employees').map().get('name').once(function(data, key){
// //     console.log("The employee's", key, data);
// //   });
