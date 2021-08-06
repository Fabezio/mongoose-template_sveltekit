import mongoose from 'mongoose'

const { model, Schema } = mongoose

export const villeSch = new Schema({
  nom: String,
  codePostal: String
})

export const Ville = model('Ville', villeSch)
