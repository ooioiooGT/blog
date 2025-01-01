import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import { db, ConnectToDb } from './db.js';

// Getting the credential from the file 
const credentials = JSON.parse(
fs.readFileSync('./credentials.json')
);
// using credential data to login firebase admin
admin.initializeApp({
  credential: admin.credential.cert(credentials),

});

// using express to set up API calling 
const app = express();
app.use(express.json());

app.use(async(req, res, next) => {
  const { authtoken} = req.headers;
  if (authtoken){
    try{
      req.user = await admin.auth().verifyIdToken(authtoken);
    }catch(e){
      return res.sendStatus(400);
    }
  }
  req.user = req.user || {};
  next();
})


app.use((req, res, next) => {
  if ( req.user){
    next();
  }else{
    res.sendStatus(401);
  }
});


//get the article
app.get('/api/articles/:name', async (req,res) =>{
  const {name} = req.params;
  const {uid} = req.user;

  const article = await db.collection('articles').findOne({name});
  if (article){
    const upvoteIds = article.upvoteIds || [];
    article.canUpvote = uid && !upvoteIds.includes(uid);
    res.json(article);
    console.log(article);
    console.log(uid);
    console.log(upvoteIds);
    console.log(article.canUpvote);

  }else{
    res.sendStatus(404);
  }

})


//this api count how many times that user click
app.put('/api/articles/:name/upvote', async (req,res) => {
  const {name} = req.params;
  const { uid } =req.user;
  const article = await db.collection('articles').findOne({name});
  if (article){
    const upvoteIds = article.upvoteIds || [];
    const canUpvote = uid && !upvoteIds.includes(uid);
    
    if(canUpvote){
      await db.collection('articles').updateOne({name}, {
        $inc:{ upvotes:1},
        $push: { upvoteIds: uid},
      })
    }    
    
    const updateArticle = await db.collection('articles').findOne({name});
    res.json(updateArticle);
  }else{
    res.send('That article dos not exist');
  }
});
// post the comment in the article 
app.post('/api/articles/:name/comments', async (req,res) => {
  const {name} = req.params;
  const {text} = req.body;
  const {email} = req.user;
  await db.collection('articles').updateOne({name},{
    $push: {comments: {postby: email, text}},
  })
  const article = await db.collection('articles').findOne({name});
  if(article){
    res.json(article);
  }else{
    res.send('That article dos not exist');
  }
  
})

// Test get data from the server 
app.get('/hello/:name', (req, res) => {
  const {name} = req.params;
  res.send(`Hello ${name} !!`);
});
// Test post data to server 
app.post('/hello', (req, res)=>{
  console.log(req.body);
  res.send('add sucess');
});


// make sure the backend connect to server and keep listen the API calling 
ConnectToDb(()=>{
  console.log('success connect to database');
  // when the server running will show the word 
 app.listen(8000,() => {
  console.log('Server is listening on port 8000'); 
});
} )
