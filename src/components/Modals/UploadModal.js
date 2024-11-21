import React, { useState } from 'react';
import './UploadModal.css';

const UploadModal = ({ onClose, onUpload }) => {
  const [name, setName] = useState('');

  const handleUpload = () => {
    if (name.trim() === '') {
      alert('File name cannot be empty!');
      return;
    }
    const uploadDate = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    onUpload({ name, uploadDate });
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2 className='modal-title'>Upload File</h2>
        <input
          type='text'
          className='modal-input'
          placeholder='Enter File Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className='modal-buttons'>
          <button className='modal-cancel' onClick={onClose}>
            Cancel
          </button>
          <button className='modal-create' onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
