import connectDB from '$lib/db'
import { Worker } from '$lib/models/timemap'
connectDB()



export async function del(request, response) {
  const { id } = request.params
  try {
    const obj = Worker.findById(id)
    if (!obj) { throw new Error("not found") }
    const removed = await obj.remove()
    if (!removed) { throw new Error('deleting error') }
    return {
      status: 200,
      body: removed
    }
  } catch (error) {
    return {
      status: 404,
      body: {message: error.message}
    }
      
  }
    
}
