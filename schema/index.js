import Joi from "joi";


const userschema=Joi.object({
    name: Joi.string().required(),
    // email:Joi.string().required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }), 
    password:Joi.string().required()
})

export{
    userschema
}