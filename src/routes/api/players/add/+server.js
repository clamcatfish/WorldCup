// src/routes/api/scores/add.js
import { connectToDatabase } from '$lib'

// @ts-ignore
export async function POST({ request }) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('players')

    const data = await request.json()
    const result = await collection.insertOne(data)

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}