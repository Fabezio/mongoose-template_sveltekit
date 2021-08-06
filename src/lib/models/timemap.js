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
const jobsSch = new Schema({
  date: String,
  isFerie: {type: Boolean, default: false},
  chefJour: String,
    agentJour: String,
  chefNuit: String,
    agentNuit: String

  
})

const siteSchema = new Schema({
  nom: String,
  adresse: String,
  telephone: String,
  email: String,
  ville: Object,
  effectif: Object
})

export const Worker = model('Worker', workerSch)
export const Ville = model('Ville', villeSch)
export const Site = model('Site', siteSchema)
export const Job = model("Job", jobsSch)
