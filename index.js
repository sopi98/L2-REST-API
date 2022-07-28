
	//import and setting up middleware
var express = require('express'); //call express
var app = express(); //define our app using express

// Middleware 
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
var port = process.env.PORT || 8081 //set our port 

//Setting route and path

// Routing
var router = express.Router() 

router.get('/', (req,res)=>{
res.json({message:'Hula! my API works<3!!!'})
}) ;

router.get('/hello', (req,res)=>{
res.json({message:'Hello World!!!'})
}) ;

/*get method to handle GET request. ‘/’ is the requested endpoint. It’s the value that comes after your domain name.*/

app.get('/:id', (req, res)=>{
    res.send('GoodBye ' + req.params.id);
});
app.use('/api',router);

app.listen(port); // create a server that browsers can connect to

console.log("Magic happened at port "+port);

