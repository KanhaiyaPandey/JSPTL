/* eslint-disable no-unused-vars */
import React from 'react'
import { Form } from 'react-router-dom'
import FormInput from '../component/FormInput'
import SubmitBtn from '../component/SubmitBtn'

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
    <Form
      method='post'
      className='card w-96 p-8 bg-base-100 flex flex-col gap-y-4'
    >
      <h4 className='text-center text-3xl font-bold'>Login</h4>


      <div className="form-control">
    <label htmlFor='customerId' className="label text-white">
    CustomerID
    </label>
    <select
      id='customerId'
      name='customerId'
      className= {`input input-bordered `}
    >
      <option value='customer1'>customer1</option>
      <option value='customer2'>customer2</option>
      <option value='admin'>Admin</option>
    </select>
      </div>



      <FormInput
        type='password'
        label='password'
        name='password'
        defaultValue="123456789"
        readOnly
      />
      <div className='mt-4'>
        <SubmitBtn text='login' />
      </div>
    </Form>
  </section>
  )
}

export default Login