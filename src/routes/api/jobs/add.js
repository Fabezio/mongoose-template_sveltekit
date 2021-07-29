import connectDB from '$lib/db'
import { Job, Worker } from '$lib/models/timemap'
connectDB()
export async function post(request, response) {
    const newObj = new Job(request.body)
    
  try {
      const obj = await newObj.save()
      if (!obj) { throw new Error("error adding job") }
      return {
          status: 200,
          body: obj
      }
    
      
  } catch (error) {
      return {
      status: 500,
      body: "error adding job"
  }
}
}
