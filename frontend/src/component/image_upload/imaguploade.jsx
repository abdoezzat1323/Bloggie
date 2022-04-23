import "./imaguploade.css"
import React from 'react';
import ImageUploading from 'react-images-uploading';

export default function UploadImage() {
  const [images, setImages] = React.useState(null);
 

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <button
              className='dowenfromline inputimage '
              onClick={onImageUpload}
              {...dragProps}
            >
              Chose your photo
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img  src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className='inputimage' onClick={() => onImageUpdate(index)}>Update</button>
                  <button className='inputimage' onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <button className='inputimage' onClick={() => alert(images)} >upload</button>
    </div>
  );
}

// import ImageUploading from 'react-images-uploading';
// // import React, { useRef, useState } from "react";



// export default function UploadImage() {
    
//     const [images, setImages] = React.useState([]);
  
//     const onChange = (imageList, addUpdateIndex) => {
//       // data for submit
//       console.log(imageList, addUpdateIndex);
//       setImages(imageList);
//     };
//     return (

//       <>
//        <ImageUploading
//           multiple
//           value={images}
//           onChange={onChange}
//           dataURLKey="data_url"
//         >
//           {({
//             imageList,
//             onImageUpload,
//             onImageRemoveAll,
//           }) => (
//             <div >
//               <button
//               className='dowenfromline inputimage '
//                 onClick={onImageUpload}
//               >
//                 Chose Image
//               </button>
//               <button className='dowenfromline inputimage'  onClick={onImageRemoveAll}>Remove Image</button>
//               {imageList.map((image, index) => (
//                 <div key={index} >
//                   <img className='imageeddit'  src={image['data_url']} alt=""  />
  
//                 </div>
//               ))}
//             </div>
//           )}
//           </ImageUploading>
//           <button className='inputimage' onClick={() => alert(images)} >upload</button>

//       </>
    

//     );

// }