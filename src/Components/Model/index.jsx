import React, { useState } from 'react'
import './Model.css';
import PropTypes from 'prop-types';
import 'boxicons'

export default function Model({setOpenModal}) {
  const [data, setData] = useState('')



  return (
    <div className='model' onClick={() => setOpenModal(false)}>
      <div className="contents" onClick={(e) => e.stopPropagation()}> 
        <div className='close__icon' onClick={() => setOpenModal(false)}>
        <box-icon name='x'></box-icon>
        </div>
        <form className='qr-form' onSubmit={(e) => {
          e.preventDefault();
          setData(e.target.data.value)
        }}>
          <label >
            Enter your data
            <input type="text" name='data' className='qr-input' placeholder='example: your name'/>
          </label>
          <button type='submit' className='qr-button'>generate</button>
        </form>
        <div className="qr-image">

          {data && <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`} alt="QR" />}
        </div>

      </div>
    </div>
  )
}


Model.propTypes = {
  setOpenModal: PropTypes.func,
};
