const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
var request = require('request');

const DIR = './uploads';
const url = 'http://localhost:8085/ecollect2'
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '_' + file.originalname);
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4500');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api/upload',upload.single('photo'), function (req, res) {
    // console.log('file being uploaded ', req.file);
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true,
          file: req.file
        })
      }
});

app.post('/download', function(req, res, next){
    var filepath = req.body;
    res.sendFile(filepath.filename);
});

app.post('/api/uploadssavetodb', function(req, res){
    console.log(req.body);
    var req_body = req.body;
    var options = {
        url: url + '/api/addfile2',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            colofficer: req_body.colofficer,
            doctype: req_body.doctype,
            docdesc: req_body.docdesc,
            destpath: req_body.destpath,
            filetype: req_body.filetype,
            filename: req_body.filename,
            filesize: req_body.filesize
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})

app.post('/api/background', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/background',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            background: req_body.background
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})

app.post('/api/problemdefinition', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/problemdefinition',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            problemdefinition: req_body.problemdefinition
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})

app.post('/api/customerproposal', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/customerproposal',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            customerproposal: req_body.customerproposal
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})

app.post('/api/abilitytopay', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/abilitytopay',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            abilitytopay: req_body.abilitytopay
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})

app.post('/api/remedialofferings', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/remedialofferings',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            remedialofferings: req_body.remedialofferings
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})

app.post('/api/swot', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/swot',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            strengths: req_body.strengths,
            weaknesses: req_body.weaknesses,
            opportunities: req_body.opportunities,
            threats: req_body.threats
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})


app.post('/api/paymentplans', function(req, res){
    var req_body = req.body;
    var options = {
        url: url + '/api/v2/accplans/paymentplans',
        form:{
            accnumber : req_body.accnumber,
            custnumber: req_body.custnumber,
            owner: req_body.owner,
            planid: req_body.planid,
            planfreq: req_body.planfreq,
            ptpamount: req_body.ptpamount,
            no_of_frequency: req_body.no_of_frequency,
            ptpstartdate: req_body.ptpstartdate,
            ptpenddate: req_body.ptpenddate
        }
    }

    request.post( options, function (error, response, body) {
        if(error) {
            console.log(error)
            res.send({
                succes: 'NO'
            })
        }else{
           // console.log(body);
            res.send({
                result: body
            })
        }
    })
})
 
const PORT = process.env.PORT || 4000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});