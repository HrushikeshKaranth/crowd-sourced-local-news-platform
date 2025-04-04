import React, { useState } from 'react'
import UploadNewsModal from './UploadNewsModal'

export default function UploadNews() {
  const [isOpen, setIsOpen] = useState(false);
  function openModal(){
    setIsOpen(true);
  }
  return (
    <div className='section'>
        <button className='upload-button' onClick={openModal}>Upload News</button>
        <UploadNewsModal state = {{setIsOpen, isOpen}} />
    </div>
  )
}
 