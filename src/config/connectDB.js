const { MongoClient } = require('mongodb')

let connectDB = async() => {
    const uri = 'mongodb+srv://trancaothien:1234567890@cluster0.ligzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const client = new MongoClient(uri)
    try {
        await client.connect()
        console.log('connect DB success');
    } catch (error) {
        console.log(error);
    } finally {
        await client.close()
    }
}

module.exports = connectDB