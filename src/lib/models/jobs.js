import mongoose from 'mongoose'

const { model, Schema } = mongoose

export const jobsSch = new Schema({
  date: String,
  isFerie: {type: Boolean, default: false},
    chefJour: String,
    agentJour: String,
  chefNuit: String,
    agentNuit: String
})

export const Job = model("Job", jobsSch)