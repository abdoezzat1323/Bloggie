import "./ImageUpload.css";
import React, { useRef, useState } from "react";
import { uploadImage } from "../../services/uploadService";
import { FaUpload } from "react-icons/fa";

export default function UploadImage(props) {
  const [img, setImg] = useState();

  const image = useRef();

  const onChange = (event) => {
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
    uploadImage(file);
  };

  const reset = (event) => {
    setImg(null);
    image.current.value = null;
  };

  return (
    <div className="inputDiv">
      <div>
        <h1 className="sideTitle">{props.title}</h1>
        <input
          className="inputImage"
          onChange={onChange}
          ref={image}
          type="file"
          name="filename"
          hidden
        ></input>
        <button
          className="inputImageButton"
          onClick={() => image.current.click()}
        >
          <FaUpload className="upIcon" />
        </button>
        {img && (
          <button className="closeButton" onClick={reset}>
            &#10006;
          </button>
        )}
      </div>
      <div>{img && <img className="inputimage" src={img} alt="" />}</div>
      <div></div>
    </div>
  );
}
// export default function UploadImage() {
//   const [images, setImages] = React.useState(null);

//   const onChange = (imageList, addUpdateIndex) => {
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="App">
//       <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
//         {({
//           imageList,
//           onImageUpload,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           <div className="upload__image-wrapper">
//             <select
//               className="dowenfromline inputimage "
//               type="file"
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Chose your photo
//             </select>
//             &nbsp;
//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image["data_url"]} alt="" width="100" />
//                 <div className="image-item__btn-wrapper">
//                   <button
//                     className="inputimage"
//                     onClick={() => onImageUpdate(index)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="inputimage"
//                     onClick={() => onImageRemove(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//       <button
//         className="inputimage"
//         onClick={() => uploadImage(images[0].file)}
//       >
//         upload
//       </button>
//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           uploadImage(event.target.files[0]);
//         }}
//       />
//     </div>
//   );
// }

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
