import {MongoClient} from 'mongodb';

let db;

async function ConnectToDb(cb){
    try{
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    await client.connect();
    db = client.db('react-blog-db');
    cb();
} catch (error){
    console.error('failed to connect to the datbase:', error);
}};
export {
    db , ConnectToDb,
};