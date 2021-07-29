import connectDB from '$lib/db'
import { Job } from '$lib/models/timemap'
// import {Worker} from '$lib/models/'
connectDB()

export async function get(req) {

  try {
    const jobs = await Job.find()
    // if (!jobs) { throw new Error('No job found') }
    return {
      status: 200,
      body: jobs
  
    }
    
  } catch (error) {
    return {
      status: 400,
      body: []
  
    }

  }
}

// export async function post(request, response) {
//     await
// }
// export async function put(request, response) {
//     await
// }
