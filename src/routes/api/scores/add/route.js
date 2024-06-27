// src/routes/api/scores/add.js
import { connectToDatabase } from '../../../lib/index.js';

// @ts-ignore
export async function post({ request }) {
  const db = await connectToDatabase();
  const { player1, player2, player1_score, player2_score } = await request.json();
  
  const newScore = {
    player1,
    player2,
    player1_score,
    player2_score,
    played_at: new Date()
  };
  
  await db.collection('games').insertOne(newScore);
  
  return {
    status: 201,
    body: newScore,
  };
}
