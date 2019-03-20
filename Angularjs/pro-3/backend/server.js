const express =require('express');
const app = express();
//const app = express();
//app.get('/',(req,res)=> res.send('Hello World'));
const cors =require('cors');
const bodyparser =require('body-parser');
const mongoose =require('mongoose');
const Issue = require('./models/Issue');
//import Issue from './models/Issue'; 

const router = express.Router();
app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://127.0.0.1:27017/issues');

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb connected");
});
router. route('/issues').get((req,res)=>{
 Issue.find((err,issue)=>{
    if(err)
         console.log(err);
    else
        res.json(issue);  
 });
});
router.route('/issues/:id').get((req,res)=>{
    issue.findById(req.params.id,(err,issue)=> {
        if(err)
        console.log(err);
        else 
            res.json(issue);
    });
});
router.route('/issues/add').post((req,res)=>{
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue':'Added Successfully'})
        })
        .catch(err => {
            res.status(400).send('failed to create new record');
        });
});
router.route('/issues/update/:id').post((req,res)=>{
 Issue.findById(req.params.id,(err,issue)=>{
    if(!issue)
        return next(new Error('Could not load document'));
    else{
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err =>{
                res.status(400).send('Update failed');
            });
        }
    });
});
router.route('/issues/delete/:id').get((req,res)=> {
    Issue.findByIdAndRemove({_id: req.params.id},(err,issue)=>{
        if(err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})
app.use('/',router);
app.listen(4000,()=>console.log('Express server running on port 4000'));
