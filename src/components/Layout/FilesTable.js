import React from 'react';
import './FilesTable.css';

const FilesTable = ({ fileData }) => {
  return (
    <div className='files-table-container'>
      <h3>Your Files</h3>
      <table className='files-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fileData.map((file) => (
            <tr key={file.no}>
              <td>{file.no}</td>
              <td>{file.name}</td>
              <td>{file.uploadDate}</td>
              <td>
                <button className='view-btn'>View</button>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilesTable;
