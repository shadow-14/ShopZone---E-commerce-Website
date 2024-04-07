const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

//let mongodbUrl = 'mongodb+srv://padii:paddi@cluster0.xbmcfkl.mongodb.net/';

let mongodbUrl = 'mongodb+srv://default:default@cluster0.u07aqpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

if(process.env.MONGODB_URL){
    mongodbUrl = process.env.MONGODB_URL;
}

let database;

async function connectTodatabase(){
    const client = await MongoClient.connect(mongodbUrl);
    database = client.db('online-shop');
}

function getDb(){
    if(!database){
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectTodatabase: connectTodatabase,
    getDb: getDb,
};
