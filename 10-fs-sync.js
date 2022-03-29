const {readFileSync, writeFileSync} = require( 'fs' );
const { loadavg } = require('os');

console.log( 'start' );

const first = readFileSync( './content/first.txt', 'utf8');
const second = readFileSync( './content/second.txt', 'utf8');
console.log( first, second );

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
);

console.log( 'Done with the task' );
console.log( 'Starting with the next one' );