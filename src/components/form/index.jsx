const FormRow = ({ type, name, value, handleChange, labelText, placeholder }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
          name={name}
          value={value}
         onChange={handleChange}
         placeholder={placeholder}
         className='form-input'
      />
    </div>
  )
}

export default FormRow
