const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

var path = require('path')
const express = require('express')

const mockAPIResponse = require('./mockAPI.js')

dotenv.config();
const app = express()
const api_key =process.env.API_KEY;
console.log(process.env.API_KEY)


app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test',  function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/usertext', async (req, res)=>{
    console.log('',req.body)
    const text = req.body?.formText;
    const lang= 'en';
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${text}&lang=${lang}`)
    const jsonRes = await response.json();
    res.send(jsonRes);
})
