
// const http = require('http');

// const server =  http.createServer((req, res) => {
//   console.log(req);
    
// }); 

// server.listen(4000,()=>{
//   console.log("app is running at port 4000")
// });


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url= req.url;
  const method= req.method;
  // if (url == '/home') {
  //   res.setHeader('content-Type','text/html' );
  //   res.write('<html>')
  //   res.write('<body>Welcome home </body>')
  //   res.write('</html>')
  // } else if (url == '/about') {
  //   res.setHeader('content-Type', 'text/html' );
  //   res.write('<html>')
  //   res.write('<body>Welcome to about us page </body>')
  //   res.write('</html>')
  // } else if  (url == '/node') {
  //   res.setHeader('content-Type', 'text/html' );
  //   res.write('<html>')
  //   res.write('<body>Welcome to my node Js project </body>')
  //   res.write('</html>')
  // } 

     if(url ==='/'){
      res.write('<html>');
      res.write('<head><title> Enter Message</title></head>');
      res.write('<body><form action = "/message" method ="POST"><input type ="text" name ="Mymessage"><button type ="submit">Send</button></form></body>');
      res.write('</html>')
       return res.end();
     }
     if(url ==='/message' && method ==='POST'){
      const body =[] ;
      req.on('data',(chunk) =>{
        body.push(chunk);
        console.log(chunk);
      });
       return req.on('end',() => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message, (err) => {
          res.statusCode=302;
          res.setHeader('Location', '/');
          return res.end();
        });
      });
    }
     res.setHeader('content-Type','text/html' );
       res.write('<html>');
       res.write('<head><title>My First Pge</title></head>');
       res.write('<body>hello from node.js server! </body>');
       res.write('</html>')
       res.end();
});

server.listen(3000);