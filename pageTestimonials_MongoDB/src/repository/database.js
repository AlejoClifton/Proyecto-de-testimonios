import mongodb from 'mongodb';

export async function connection(callback) {
    const client = new mongodb.MongoClient('mongodb://192.168.1.33:27017');

    try {
        await client.connect();

        return await callback(client.db("pageTestimonials"));
    }
    catch (err) {
        console.log("Error", err);
        throw err;
    }
    finally {
        client.close();
    }
}

export default connection;