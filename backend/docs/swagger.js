const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const express = require('express')
const router = express.Router()

const swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title: 'Express API for ABM app',
        version: '1.0.0'
    },
    servers:[
        {
            url: 'http://localhost:8000/api',
            description: 'Development server'
        }
    ]
}

const options = {
    swaggerDefinition,
    apis:['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = router