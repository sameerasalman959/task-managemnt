import { Router } from 'express'
import controllers from './task.controller'
import { get } from 'lodash'

const router = Router()

router 
.route('/')
.get(controllers.getOne)
.post(controllers.createone)

router
.route('/:id')
.get(controllers.getOne)
.put(controllers.updateOne)
.delete(controllers.removeOne)

export default router