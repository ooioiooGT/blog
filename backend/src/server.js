import express from 'express';
import { db, ConnectToDb } from './db.js';


const app = express();
app.use(express.json());

app.get('/api/articles/:name', async (req,res) =>{
  const {name} = req.params;
 
  const article = await db.collection('articles').findOne({name});
  if (article){
    res.json(article);
  }else{
    res.sendStatus(404);
  }

})

//this apit count how many times that user click
app.put('/api/articles/:name/upvote', async (req,res) => {
  const {name} = req.params;
  await db.collection('articles').updateOne({name}, {
    $inc:{ upvotes:1},
  });
  const article = await db.collection('articles').findOne({name});
  if (article){
    res.send(`the ${name} article now has ${article.upvotes} upvote`);
  }else{
    res.send('That article dos not exist')
  }
});

app.post('/api/articles/:name/comments', async (req,res) => {
  const {name} = req.params;
  const {postby, comment} = req.body;
  await db.collection('articles').updateOne({name},{
    $push: {comments: {postby, comment}},
  })
  const article = await db.collection('articles').findOne({name});
  if(article){
    res.send(article.comments);
  }else{
    res.send('That article dos not exist')
  }
  
})

// for get data trough the link
app.get('/hello/:name', (req, res) => {
  const {name} = req.params;
  res.send(`Hello ${name} !!`);
});
//post the data to the server 
app.post('/hello', (req, res)=>{
  console.log(req.body);
  res.send('add sucess');
});



ConnectToDb(()=>{
  console.log('success connect to database');
  // when the server running will show the word 
 app.listen(8000,() => {
  console.log('Server is listening on port 8000'); 
});
} )
