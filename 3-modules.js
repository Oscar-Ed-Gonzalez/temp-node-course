// commonsJS, every file is a module (by default)
// Modules are encapsulated code (only share the minimum)
const {oscar, martha} = require( './4-names' );
const sayHi = require( './5-utils' );
const data = require( './6-alternative-flavor' );

// sayHi( 'Camilo' );
// sayHi( oscar );
// sayHi( martha ); 
// console.log(data)

require( './7-mind-grenade' );