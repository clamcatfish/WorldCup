import { connectToDatabase } from '../../../../../lib/index.js';
import { ObjectId } from 'mongodb';

// @ts-ignore
export async function post({ request, params }) {
  const db = await connectToDatabase();
  const { id } = params;
  const { player1, player2, player1_score, player2_score } = await request.json();
  
  const updatedScore = {
    player1,
    player2,
    player1_score,
    player2_score,
    played_at: new Date()
  };
  
  await db.collection('games').updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedScore }
  );
  
  return {
    status: 200,
    body: updatedScore,
  };
}
