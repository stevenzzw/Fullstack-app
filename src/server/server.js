// server.js



var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');


var Bear     = require('./bear');

var mongoose   = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.gq79j.mongodb.net/Project1?retryWrites=true&w=majority');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT')
 //   console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var bear = new Bear();     
        bear.firstName = req.body.firstName;  
        bear.lastName = req.body.lastName; 
        bear.age = req.body.age; 
        bear.sex=req.body.sex;
        bear.id=req.body.id; 
        console.log(bear);
       
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.send({ message: 'Bear created!' });
        });
        
    })
	//;


// get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });



// ----------------------------------------------------
router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
	//;

// update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
         console.log(req.body);
        // use our bear model to find the bear we want
        Bear.findOne({id:req.params.bear_id}, function(err, bear) {
   
            if (err)
                res.send(err);

              //  console.log(req.body);
                bear.firstName = req.body.firstName; 
                bear.lastName = req.body.lastName;  
                bear.age = req.body.age; 
                bear.sex=req.body.sex;
              
          
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
	//;

// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Bear.deleteOne({
            id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });



app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
