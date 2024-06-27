import { connectToDatabase } from '../../lib/index'

export async function get() {
    const db = await connectToDatabase()
    const players = await db.collection('players').find({}).toArray()

    return {
        status: 200,
        body: players
    }
}