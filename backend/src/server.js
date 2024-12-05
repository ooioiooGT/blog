import express from 'express';

let articlesInfo = [{
  name: 'learn-react',
  upvotes: 0,
  comments: [],
},{
  name:'learn-node',
  upvotes: 0, 
  comments: [],
},{
  name: 'mongodb',
  upvotes: 0, 
  comments: [],
}]

const app = express();
app.use(express.json());

//this apit count how many times that user click
app.put('/api/articles/:name/upvote', (req,res) => {
  const {name} = req.params;
  const article = articlesInfo.find(a => a.name ===name); 
  if ( article){
    article.upvotes += 1; 
    res.send(`the ${name} article now has ${article.upvotes} upvote`);
  }else{
    res.send('That article dos not exist')
  }
});

app.post('/api/articles/:name/comments', (req,res) => {
  const {name} = req.params;
  const {postby, comment} = req.body;
  const article = articlesInfo.find(a => a.name === name);
  if(article){
    article.comments.push({postby, comment});
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
// when the server running will show the word 
 app.listen(8000,() => {
    console.log('Server is listening on port 8000'); 
 });

//post the data to the server 
 app.post('/hello', (req, res)=>{
   console.log(req.body);
   res.send('add sucess');
 });