// import * as Yup from 'yup'

// import { object, string } from "yup"
import z from "zod"

// export const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     age: 0,
// }

// export const userSchemaYup = object({
//     firstName: string().required('First Name is Required'),
//     lastName: string().required('Last Name is Required'),
//     password: string().required('password is required'),
//     email: string().required('email is required')
// })

export const userSchemaZod = z.object({
    firstName: z.string().min(5, 'First Name is Required'),
    lastName: z.string().min(5, 'Last Name is Required'),
    age: z.number().min(18, 'age should be above 18'),
    password: z.string().min(8, 'password minimum 8 char'),
    confirmPassword: z.string(),
    email: z.email('please input a valid mail')
})
.superRefine((data, ctx)=>{
    // console.log('data, ctx', data, ctx)
    if(data.password!==data.confirmPassword){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'password not match',
            path: ['confirmPassword']
        })
    }
})

export type initialValues = z.infer<typeof userSchemaZod>

export type defaultValT = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    age: number,
    phone: number
}

export const defaultvalues:defaultValT = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
    phone: 232
}

// console.log(initialValues)









// .refine((data)=>{
//     console.log('data', data);
//     return data.password===data.confirmPassword
// },
// {
//     error: 'Password not match',
//     path: ['confirmPassword']
// });