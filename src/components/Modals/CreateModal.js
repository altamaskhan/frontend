import React, { useState } from 'react';
import './CreateModal.css';

const CreateModal = ({ onClose, onCreate }) => {
  const [projectName, setProjectName] = useState('');

  const handleCreate = () => {
    if (projectName.trim() === '') {
      alert('Project name cannot be empty!');
      return;
    }
    onCreate(projectName);
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2 className='modal-title'>Create Project</h2>
        <input
          type='text'
          className='modal-input'
          placeholder='Enter Project Name'
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div className='modal-buttons'>
          <button className='modal-cancel' onClick={onClose}>
            Cancel
          </button>
          <button className='modal-create' onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
