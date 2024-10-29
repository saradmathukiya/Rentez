import React from 'react'
import IconBtn from './IconBtn';

const ConfirmationModal = ({modalData}) => {
  return (
    <div className="your-modal-overlay">
      <div className="your-modal-content">
        <p className="your-modal-title">
            {modalData?.text1}
        </p>
        <p className="your-modal-description">
            {modalData?.text2}
        </p>
        <div className="your-modal-buttons">
          <IconBtn onclick={modalData?.btn1Handler} text={modalData?.btn1Text} />
          <button
            className="your-modal-custom-button"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal