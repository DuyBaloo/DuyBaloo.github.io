const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


//const ObjectId = mongoose.Types.ObjectId


const Schema = mongoose.Schema;


const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Lets code!')
})


app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json


// Connect to database
mongoose.connect('mongodb://localhost:27017/YourRecipesDB', {useNewUrlParser: true, useUnifiedTopology: true})


// Create account schema
const Account = new Schema({
    username: String,
    password: String,
    email: String
})


// Create account model
const AccModel = mongoose.model("Account", Account)


// Send out signup page
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})


// recieve data from signup
app.post('/api/signup', async (req, res) => {
    var result = {success: false}
    
    try{
        //Search if username is taken
        var foundDoc = await new Promise((resolve, reject) => {
            AccModel.findOne({username: req.body.username}, function(err, doc){
                if(err) reject(err)
                resolve(doc)
            })
        })
        if(foundDoc) throw "Error: Account already exists with this username!"

        //Check that fields are not empty
        if(!req.body.username) throw "Missing username"
        if(!req.body.password) throw "Missing password"
        if(!req.body.email) throw "Missing email"

        //Make password safe
        var hashedPass = await bcrypt.hash(req.body.password, 10)

        //Prepare data to save
        var accDoc = new AccModel()
        accDoc.username = req.body.username
        accDoc.password = hashedPass
        accDoc.email = req.body.email

        //Save to database
        await new Promise((resolve, reject) => {
            accDoc.save(function(e){
                if(e) reject(e)
                resolve()
            })
        })

        result.success = true

    }
    catch(e){
        if(typeof e === "string") result.reason = e
        else {
            result.reason = "Server error"
            console.log(e)
        }
    }

    res.json(result)

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
