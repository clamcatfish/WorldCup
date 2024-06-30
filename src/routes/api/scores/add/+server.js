// src/routes/api/scores/add.js
import { connectToDatabase } from '$lib'

// @ts-ignore
export async function POST({ request }) {
  const db = await connectToDatabase();
  const { players } = await request.json();
  
  const newScore = {
    players,
    played_at: new Date()
  };
  
  await db.collection('games').insertOne(newScore);
  
  return {
    status: 201,
    body: newScore,
  };
}
