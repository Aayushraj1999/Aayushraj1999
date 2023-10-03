
// const http = require('http');

// const server =  http.createServer((req, res) => {
//   console.log(req);
    
// }); 

// server.listen(4000,()=>{
//   console.log("app is running at port 4000")
// });


const http = require('http');

const server = http.createServer((req, res) => {
  const url= req.url;
  if (url == '/home') {
    res.setHeader('content-Type','text/html' );
    res.write('<html>')
    res.write('<body>Welcome home </body>')
    res.write('</html>')
  } else if (url == '/about') {
    res.setHeader('content-Type', 'text/html' );
    res.write('<html>')
    res.write('<body>Welcome to about us page </body>')
    res.write('</html>')
  } else if (url == '/node') {
    res.setHeader('content-Type', 'text/html' );
    res.write('<html>')
    res.write('<body>Welcome to my node Js project </body>')
    res.write('</html>')
  } 
});

server.listen(3000);