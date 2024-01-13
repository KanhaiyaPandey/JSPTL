/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const FormInput = ({label, name, type, defaultValue, size ,readOnly , placeholder , step}) => {
  return (
    <div className="form-control">
  <label className="label">
    <span className="label-text capitalize">{label}</span>
  </label>
  <input type={type}
       name={name}
      defaultValue={defaultValue}
      readOnly = {readOnly}
      placeholder={placeholder}
      step = {step}
    className={`input input-bordered ${size}` }/>
</div>
  )
}
export default FormInput;