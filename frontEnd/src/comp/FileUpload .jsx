import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "../Css_for_comp/FileUpload.css"
const FileUpload = () => {
  // יצירת מצב לאחסון קובץ שנבחר
  const [file, setFile] = useState(null);
  // יצירת מצב לאחסון ה-URL של הקובץ שהועלה
  const [fileUrl, setFileUrl] = useState('');

  // פונקציה לטיפול בקבלת קבצים בגרירה ושחרור
  const onDrop = (acceptedFiles) => {
    // שמירת הקובץ שנבחר במצב
    setFile(acceptedFiles[0]);
    console.log(file);
  };

  // שימוש ב-hook של react-dropzone לטיפול בגרירה ושחרור
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // פונקציה לטיפול בשליחת הטופס
  const handleClick = async () => {
    
    // יצירת אובייקט FormData והוספת הקובץ אליו
    const formData = new FormData();
    formData.append('file', file);

    try {
      // שליחת בקשת POST לשרת עם הקובץ
      const response = await fetch('http://localhost:3000/users/upload', {
        method: 'POST',
        body: formData
      });
      // קבלת תגובת השרת והצגת ה-URL של הקובץ שהועלה
      const data = await response.json();
      setFileUrl(data.fileUrl);
      alert(data)
    } catch (error) {
      // טיפול בשגיאות
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      
        <div {...getRootProps({ className: 'dropzone'})}>
          <button {...getInputProps()}></button>
          <p>גרור ושחרר כאן את הקובץ, או לחץ כדי לבחור קובץ</p>
        </div>
        {!fileUrl && ( 
        <div>
          <p>File uploaded successfully. You can view it <a href={fileUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      )} 
        
        

















    {/* </div> */}
      {/* טופס להעלאת קובץ */}
      {/* <form onSubmit={handleSubmit}> */}
        {/* אזור גרירה ושחרור */}
        {/* <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>גרור ושחרר כאן את הקובץ, או לחץ כדי לבחור קובץ</p>
        </div> */}
        {/* כפתור לשליחת הטופס */}
        {/* <button type="submit">Upload</button> */}
      {/* </form> */}
      {/* הצגת הקובץ שהועלה */}
      {/* {fileUrl && ( */}
        {/* <div>
          <p>File uploaded successfully. You can view it <a href={fileUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      )} */}
    </div>
  );
};

export default FileUpload;
