import { connectToDatabase } from '$lib'
import { json } from '@sveltejs/kit'

export async function GET() {
    const db = await connectToDatabase()
    const scores = await db.collection('games').find({}).sort({ played_at: -1 }).toArray()

    return json(scores, {
      status: 200
    })
}

// @ts-ignore
export async function POST({ request }) {
    const db = await connectToDatabase();
    const { player1, player2, player1Score, player2Score } = await request.json();
  
    const result = await db.collection('games').insertOne({
      player1,
      player2,
      player1_score: player1Score,
      player2_score: player2Score,
      played_at: new Date()
    });
  
    // @ts-ignore
    if (result.insertedCount === 1) {
      return {
        status: 201,
        body: { message: 'Score added successfully' },
      };
    } else {
      return {
        status: 500,
        body: { error: 'Failed to add score' },
      };
    }
  }