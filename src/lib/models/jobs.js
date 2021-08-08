import mongoose from 'mongoose'

const { model, Schema } = mongoose

export const jobsSch = new Schema({
  date: String,
  isFerie: {type: Boolean, default: false},
    chefJour: Object,
    agentJour: Object,
  chefNuit: Object,
    agentNuit: Object
})

export const Job = model("Job", jobsSch)