import mongoose from 'mongoose'
// import {Worker} from "../models/timemap"

const uri = 'mongodb+srv://fabezio:C0denCQRT@cluster0.0r1tc.mongodb.net/timemap?retryWrites=true&w=majority'
const connectOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
const dbName = 'timemap'

const connection = mongoose.connect(uri, connectOptions).then(() => console.log(dbName, 'DB ready'))

export default function connectDB () {
  return connection
}
