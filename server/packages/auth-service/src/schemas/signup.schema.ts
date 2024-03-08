import Joi, { ObjectSchema } from 'joi';

const signupSchema: ObjectSchema = Joi.object().keys({
  nickname: Joi.string().min(4).max(12).required().messages({
    'string.base': 'nickname must be of type string',
    'string.min': 'Invalid nickname',
    'string.max': 'Invalid nickname',
    'string.empty': 'nickname is a required field'
  }),
  password: Joi.string().min(4).max(12).required().messages({
    'string.base': 'Password must be of type string',
    'string.min': 'Invalid password',
    'string.max': 'Invalid password',
    'string.empty': 'Password is a required field'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.email': 'Invalid email',
    'string.empty': 'Email is a required field'
  }),
  profileImage: Joi.string().required().messages({
    'string.base': 'Please add a profile image',
    'string.email': 'Profile image is required',
    'string.empty': 'Profile image is required'
  })
});

export { signupSchema };
