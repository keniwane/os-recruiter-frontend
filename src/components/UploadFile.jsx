import { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import './UploadFile.css';

import React from 'react';

const UploadFile = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No Resume Selected');

  return (
    <div className='form-box'>
      <form className='file-upload-form' action='' onClick={() => document.querySelector('.input-field').click()}>
        <input
          type='file'
          accept='.pdf'
          className='input-field'
          hidden
          onChange={({ target: { files } }) => {
            const file = files[0];
            if (file) {
              if (file.size > 1048576) {
                alert('File size should not exceed 1MB.');
                return;
              }
              setFileName(file.name);
              setImage(URL.createObjectURL(file));
            }
          }}
        />
        {image ? (
          <img src={image} width={150} height={60} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color='var(--clr-orange-400)' size={60} />
            <p>Browse Files (PDF) to Upload</p>
          </>
        )}
      </form>
      <section className='uploaded-row'>
        <AiFillFileImage color='var(--clr-orange-400)' />
        <span className='upload-content'>
          {fileName.length > 20 ? fileName.slice(0, 18) + '...' : fileName} -
          <MdDelete
            onClick={() => {
              setFileName('No Resume Selected');
              setImage(null);
            }}
          />
        </span>
      </section>
    </div>
  );
};

export default UploadFile;
