const http = require( 'http' )

const server = http.createServer( ( req, res) => {
    if(req.url === '/'){
        res.end( '<h1>Welcome to our home page</h1>' )
    }
    if(req.url === '/about'){
        res.end( 'This is our short history' )
    }
    
} )

server.listen( 5000 )