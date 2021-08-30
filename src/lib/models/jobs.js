import mongoose from 'mongoose'

const { model, Schema } = mongoose
const msg = " - - - - -"

export const jobsSch = new Schema({
  date: String,
  isFerie: {type: Boolean, default: false},
    chefJour: {type: Object, default: msg},
    agentJour: {type: Object, default: msg},
  chefNuit: {type: Object, default: msg},
    agentNuit: {type: Object, default: msg}
})

export const Job = model("Job", jobsSch)