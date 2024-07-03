import { connectToDatabase } from '$lib'
import { json } from '@sveltejs/kit'

export async function GET() {
    const db = await connectToDatabase()
    const players = await db.collection('players').find({}).toArray()

    return json(players, {
        status: 200
      })
}