import mongoose from 'mongoose'
import { string } from 'joi'

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    Pass: {
        required: true,
        
    },
    email: {
        lowercase:true,
        type: String,
        required:true
    }
})
module.exports = mongoose.model('tasks', taskSchema)