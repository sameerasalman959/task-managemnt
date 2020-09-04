import {taskSchema} from './task/task.model'
import {userSchema} from './user/users.model'

app.post('/', (req, res, next) => {

    // require the Joi module
    const Joi = require('joi');

    // fetch the request data
    const data = req.body;

    // define the validation schema
    const schema = Joi.object().keys({
        name: Joi.string().max(20),

        email: Joi.string().email().required(),

        
        phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),

        surname: Joi.string().max(10),

        techQualified: Joi.boolean().required()

    });

    // validate the request data against the schema
    Joi.validate(data, schema, (err, value) => {

        // create a random number as id
        const id = Math.ceil(Math.random() * 9999999);

        if (err) {
            // send a 422 error response if validation fails
            res.status(404).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            });
        } else {
            // send a success response if validation passes
            // attach the random ID to the data response
            res.json({
                status: 'success',
                message: 'User created successfully',
                data: Object.assign({id}, value)
            });
        }

    });

});
