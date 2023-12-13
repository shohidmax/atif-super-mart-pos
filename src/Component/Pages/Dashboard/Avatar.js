import React, { useState } from 'react';
import axios from 'axios';

const Avatar = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select an image first.');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      await axios.post('http://localhost:3005/convertTo3DAvatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error.message);
      alert('Error uploading image. Please try again.');
    }
  };
    return (
        <div>
             <div>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
        </div>
    );
};

export default Avatar;