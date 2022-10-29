import React from 'react'
import * as yup from 'yup';


const validations = yup.object({
   
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required(),
   
  });

export default validations;