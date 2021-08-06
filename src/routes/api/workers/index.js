import connectDB from '$lib/db'
import { Worker } from '$lib/models/workers'
connectDB()

export async function get () {
  try {
    const workers = await Worker.find()
    if (!workers) { throw new Error('No worker found') }
    return {
      status: 200,
      body: workers

    }
  } catch (error) {
    return {
      status: 400,
      body: 'data not found'

    }
  }
}

// export async function post(request, response) {
//     await
// }
// export async function put(request, response) {
//     await
// }
