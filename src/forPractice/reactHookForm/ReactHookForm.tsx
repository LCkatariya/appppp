import React, { useCallback, useState } from 'react';
import { FormProvider, useForm, useFormContext, useFormState, useWatch } from 'react-hook-form'
import { defaultValT, defaultvalues, initialValues, userSchemaZod } from './reactHookFormSchema';
// import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';

// const MyStyledInputField = React.memo((props) => {
//     const { type, Label, value, register, errors, options } = props

//     return (
//         <div>{console.log('lalchandReactjscomoinenenenne')}
//             <label htmlFor={value}>{Label}</label>
//             <input type={type} {...register(value, { ...options })} />
//             {errors[value] && <span style={{ color: 'red' }}>{errors[value].message}</span>}
//         </div>
//     )
// })

const MyStyledInputField = ({ type, Label, name, options }: { type: string, Label: string, name: string, options: { required: boolean, valueAsNumber?: boolean } }) => {
    const { control, register } = useFormContext();
    const { errors } = useFormState({ control, name })
    // console.log('MyStyledInputField')
    return (
        <div>
            <label htmlFor={name}>{Label}</label>
            <input type={type} id={name} {...register(name, { ...options })} />
            {errors[name] && <span style={{ color: 'red' }}>{String(errors[name].message)}</span>}
        </div>
    )
}

function ReactHookForm() {
    const [succesFullySubmit, setSuccesFullySubmit] = useState<boolean>(false)
    // const { handleSubmit, register, formState, ...rest } = useForm({ defaultValues: initialValues, resolver: zodResolver(userSchemaZod) });
    // const { errors, isDirty, ...restFormStateValues } = formState

    // console.log("formState, rest, restFormStateValues", errors, rest, restFormStateValues, formState, isDirty);

    const methods = useForm<initialValues>({ defaultValues: defaultvalues, resolver: zodResolver(userSchemaZod) })
    // console.log('methods', methods)

    // console.log("initialValues", initialValues)

    const onSubmit = (values: initialValues) => {
        // console.log('onSubmit values', values)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                ...values
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {console.log('lalchand-after api call', json);
                setSuccesFullySubmit(true)
                methods.reset()
            });
            setTimeout(()=>{
                setSuccesFullySubmit(false)
            },3000)
        // rest.reset()
    }

    //     const Fname = useWatch({ control , name:['firstName','age']})

    // console.log('Fname', Fname)


    return (
        <><FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <h1>ReactHookForm</h1>
                <MyStyledInputField name='firstName' type="text" Label="First Name" options={{ required: true }} />
                <MyStyledInputField name='lastName' type="text" Label="Last Name" options={{ required: true }} />
                <MyStyledInputField name='age' type="number" Label="Age" options={{ required: true, valueAsNumber: true }} />
                <MyStyledInputField name='password' type="password" Label="Password" options={{ required: true }} />
                <MyStyledInputField name='confirmPassword' type="password" Label="Confirm Password" options={{ required: true }} />
                <MyStyledInputField name='email' type="email" Label="Email" options={{ required: true }} />
                <input type="submit" value="Submit" />
            </form>
        </FormProvider>{succesFullySubmit ? <p>form sucessfuly submit</p> : ''}</>

        //    <form onSubmit={handleSubmit(onSubmit)}>
        //     <h1>ReactHookForm</h1>
        //     <MyStyledInputField type="text" Label="First Name" value='firstName' register={register} options={{required: true}} errors={errors} />
        //     <MyStyledInputField type="text" Label="Last Name" value='lastName' register={register} options={{required: true}} errors={errors} />
        //     <MyStyledInputField type="number" Label="Age" value='age' register={register} options={{required: true, valueAsNumber: true}} errors={errors} />
        //     <MyStyledInputField type="password" Label="Password" value='password' register={register} options={{required: true}} errors={errors} />
        //     <MyStyledInputField type="password" Label="Confirm Password" value='confirmPassword' register={register} options={{required: true}} errors={errors} />
        //     <MyStyledInputField type="email" Label="Email" value='email' register={register} options={{required: true}} errors={errors} />
        //  {/* <div>
        //         <lable htmlFor="gender">Gender</lable>
        //         <select {...register('gender')}>
        //             <option value='female'>female</option>
        //             <option value='male'>male</option>
        //             <option value='other'>other</option>
        //         </select>
        //     </div> */}

        //  <input type="submit" value="Submit" />
        // </form>
    )
}

export default ReactHookForm