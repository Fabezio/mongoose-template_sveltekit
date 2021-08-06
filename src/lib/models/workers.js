import mongoose from 'mongoose'

const { model, Schema } = mongoose

export const workerSch = new Schema({
  nom: String,
  prenom: String,
  phone: String,
  email: String

})

export const Worker = model('Worker', workerSch)
