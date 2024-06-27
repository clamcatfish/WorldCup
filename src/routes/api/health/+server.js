import { connectToDatabase } from "$lib";
import { json } from "@sveltejs/kit";

export const function get() {
    try {
        const db = await connectToDatabase()
        const collection = db.collection('games')
        console.log(collection)
    } catch (error) {
        return {
            status: 500,
            body: { status: 'disconnected', error: error.message}
        }
    }
}