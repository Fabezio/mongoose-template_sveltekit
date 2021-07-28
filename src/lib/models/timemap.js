import mongoose from 'mongoose'
const { model, Schema } = mongoose

const workerSch = new Schema({
  nom: String,
  prenom: String,
  phone: String,
  email: String

})

const villeSch = new Schema({
  nom: String,
  codePostal: String
})

const siteSchema = new Schema({
  nom: String,
  adresse: String,
  telephone: String,
  email: String,
  ville: villeSch,
  effectif: [workerSch]
})

export const Worker = model('Worker', workerSch)
export const Ville = model('Ville', villeSch)
export const Site = model('Site', siteSchema)
