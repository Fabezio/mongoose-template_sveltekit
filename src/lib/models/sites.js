import mongoose from 'mongoose'

const { model, Schema } = mongoose

export const siteSchema = new Schema({
  nom: String,
  adresse: String,
  telephone: String,
  email: String,
  ville: Object,
  effectif: Object
})

export const Site = model('Site', siteSchema)
