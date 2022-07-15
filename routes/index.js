var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let mess_committee=[
  {
    name:"Sheeja",
    position:"Matron",
    imagelink:""
  },
  {
    name:"Lakshmi",
    position:"Hostel Secretary",
    imagelink:""
  },
  {
    name:"Jeenu George",
    position:"Mess Secretary",
    imagelink:""
  },
  {
    name:"Athira Sunilkumar",
    position:"1st Year Rep",
    imagelink:""
  }
]
let mess_committee2=[
  {
    name:"Devendu M",
    position:"2nd Year Rep",
    imagelink:""
  },
  {
    name:"Lija C M",
    position:"3rd Year Rep",
    imagelink:""
  },
  {
    name:"Hima jacob",
    position:"cleaning committee head",
    imagelink:""
  },
  {
    name:"Prajaktha Srenish",
    position:"library incharge",
    imagelink:""
  }
]
  res.render('index', {mess_committee,mess_committee2});
});

module.exports = router;
