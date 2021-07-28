import connectDB from '$lib/db'
import { Worker } from '$lib/models/timemap'
connectDB()

export async function get(req) {

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
      body: "data not found"
  
    }

    // res.status(400).json({ message: error })
  }
  }
  

  // await Worker.find({}, (found) =>  (response.status(200).json(found)))

// export async function post(request, response) {
//     await
// }
// export async function put(request, response) {
//     await
// }
// export async function del(request, response) {
//     await
// }
