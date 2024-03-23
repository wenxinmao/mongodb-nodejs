const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL
const dbName = 'test'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
  // Connect to the MongoDB server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // Get the list of collections in the specified database
  const collections = await db.listCollections().toArray();
  
  // Display the collection names
  collections.forEach(collection => console.log(collection.name));

  // Close the connection
  await client.close();
}

main().catch(console.error);