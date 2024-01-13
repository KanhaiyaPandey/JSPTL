/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import FormInput from '../component/FormInput'
import SubmitBtn from '../component/SubmitBtn'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="hero min-h-screen">
<div className="bg-transparent p-8  w-full sm:max-w-lg">
  <h2 className="text-3xl text-center text-white font-bold mb-6">Register</h2>
  <Form
   method='post'>
  
    <div className=" sm:grid-cols-2 grid gap-4">


    <div >
              <label  htmlFor="date">
                Select Date
              </label>
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="input input-bordered"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
                </div>
              </div>
            </div>


    <FormInput
    type='text'
    label='company'
    name='company'
  />    
      <FormInput
    type='text'
    label='owner'
    name='owner'
    required
  />

   <FormInput
    type='text'
    label='item'
    name='item'
  />

<FormInput
    type='number'
    label='quantity'
    name='quantity'
   />
   <FormInput
    type='number'
    label='weight'
    name='weight'
    step= "any"
   />
      <FormInput
    type='text'
    label='address'
    name='address'
   />
  
  <FormInput
    type='text'
    label='tracking ID'
    name='trackingID'
   />

<FormInput
    type='number'
    label='shipment size'
    name='shipmentSize'
    placeholder = "L x B x H  msq"
   />

<FormInput
    type='number'
    label='boxes'
    name='boxCount'
   />

<FormInput
    type='text'
    label='specifications'
    name='specs'
   />

<FormInput
    type='text'
    label='checklistQuantity'
    name = "checklistQuantity"
   />
    </div>

    <div className='mt-6'>
    <SubmitBtn text='Place Order' />
  </div>
  </Form>
</div>
</div>
  )
}

export default Dashboard