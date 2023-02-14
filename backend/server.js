const express = require("express");
const cors = require('cors');
const jsonWebToken = require('jsonwebtoken')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const {User} = require('./userModel')

const DB = require('./db');
const { json } = require("body-parser");

const secret = 'SECRET'


const app = express();
app.use(bodyParser.json())


const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json("Hello World");
});
// signup------------------------------
app.post('/user/signin', (req, res) => {
    if(!req.body.email || !req.body.password){
        res.json({sucess: false, error: 'require parameters'})
        return;
    }
    User.create({
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        number: req.body.number
    })
    .then((user) => {
        const token = jsonWebToken.sign({id: user._id, email: user.email}, secret)
        res.json({success: true, token: token})
    })
    .catch((err) => {
        res.json({success: false, err: err})
    })
})
//login------------------------
app.post('/user/login', (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        if(!user){
            res.json({sucess: false, error: 'user does not exists'})
        }else{
            if(!bcrypt.compareSync(req.body.password, user.password)){
                res.json({success: false, error: 'Password not correct'})
            }else{
                res.json({success: true, msg: 'success login'})
            }
        }
    })
})







app.listen(3000,() => console.log("Server listening at port 3000"));