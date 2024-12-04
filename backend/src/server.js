import express from 'express';

const app = express();
app.use(express.json());


app.put('/api/articles/:name/upvote', (req,res) => {

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