import express from 'express'
import { getAllData } from '../controllers/getAllData.js'
import { getDataByPathParams } from '../controllers/getDataByPathParams.js'
import { postData } from '../controllers/postData.js'

export const apiRouter = express.Router()

apiRouter.get('/', getAllData)

apiRouter.get('/:field/:term', getDataByPathParams)

apiRouter.post('/', postData)