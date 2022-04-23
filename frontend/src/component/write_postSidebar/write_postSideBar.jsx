// import "./write_postsidebar.css"
// import "./multiselect.css"
// import React, { useState } from "react";
// import { MultiSelect } from "@progress/kendo-react-dropdowns";



// export default function Write_PostSideBar() {
//     const sports = [
//         "Baseball",
//         "Basketball",
//         "Cricket",
//         "Field Hockey",
//         "Football",
//         "Table Tennis",
//         "Tennis",
//         "Volleyball",
//       ];

//     const [title, setTitle] = useState('')
    

//   return (
      
//     <div className="write_postsidebar  ">
//         <button  className="input11"  type="button"  > Post </button>
//         <h1 className="WSideItem" />
//         <div className="lable1 ">
//           <label className="label2" >Chose youre categorys</label>
//             <MultiSelect
//             className="k-badge  webkit-input-placeholder"
//             onChange={e => setTitle(e.target.value)}
//             data={sports}
//             placeholder="click here to chose..(^^)"
//             />
//         </div>  
//             <button type="button" onClick={() => alert(title)} className="btn">Save</button>
//         <h1 className="WSideItem" />
          
        
//     </div>
//   )
// }
