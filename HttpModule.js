// const https = require('https');


// https.get('https://cat-fact.herokuapp.com/facts?animal_type=cat&category=history', (response) => {
//     let data = '';

//     response.on('data', (chunk) => {
//         data += chunk;
//     });

//     response.on('end', () => {
//         console.log(JSON.parse(data));
//     });
// }).on('error', (error) => {
//     console.error('Error:', error);
// });

const https=require('https');
const url=require('url');
const port=8000;
const server=https.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var q=url.parse(req.url,true).query;
    var text=q.year+""+q.month;
    res.end(text);
});

server.listen(port,()=>{
    console.log(`server is running at port ${port}`)
});