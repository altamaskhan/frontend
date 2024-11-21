import React, { useState } from 'react';
import './Body.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import PodcastOptions from './PodcastOptions';
import FileUpload from './FileUpload';
import FilesTable from './FilesTable';

const LayoutBody = () => {
  const [fileData, setFileData] = useState([
    {
      no: 1,
      name: 'THE SIDEPOD S2 EPISODE 15',
      uploadDate: '25 Oct 23 | 09:04',
    },
    {
      no: 2,
      name: 'THE SIDEPOD S2 EPISODE 17',
      uploadDate: '27 Oct 23 | 11:08',
    },
  ]);

  const [showFilesTable, setShowFilesTable] = useState(false);

  const handleUpload = (newFile) => {
    const updatedData = [...fileData, { no: fileData.length + 1, ...newFile }];
    setFileData(updatedData);
    setShowFilesTable(true); // Switch to the table after uploading
  };

  return (
    <div className='app'>
      <Sidebar />
      <main className='body-main'>
        <Nav />
        <PodcastOptions />
        {showFilesTable ? (
          <FilesTable fileData={fileData} />
        ) : (
          <FileUpload onUpload={handleUpload} />
        )}
      </main>
    </div>
  );
};

export default LayoutBody;
