// import React, { Component } from "react";
// import { Link} from "react-router-dom";
// import axios from "axios";

// export default class Admin1 extends Component {

// constructor(props) {
//     super(props);
//     const token = localStorage.getItem("token");

//     let loggedIn = true;
//     if (token == null) {
//       loggedIn = false;
//     }

//     this.state = {
//       loggedIn,
//       name: "",
//       address: "",
//       postcode: "",
//       phone: "",
//       posts: [],
//     };
//   }

//   componentDidMount = () => {
//     this.getCustomerList();
//   };

//   getCustomerList = () => {
//     axios
//       .get("/api")
//       .then((response) => {
//         const data = response.data;
//         this.setState({ posts: data });
//         console.log("Data has been received");
//       })
//       .catch(() => {
//         alert("Error retrieving data");
//       });
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   submit = (event) => {
//     event.preventDefault();

//     const payload = {
//       name: this.state.name,
//       address: this.state.address,
//       postcode: this.state.postcode,
//       phone: this.state.phone,
//     };

//     axios({
//       url: "/api/save",
//       method: "POST",
//       data: payload,
//     })
//       .then(() => {
//         console.log("Data has been sent to the server");
//         this.resetUserInputs();
//         this.getCustomerList();
//       })
//       .catch(() => {
//         console.log("Internal server error");
//       });
//   };

//   resetUserInputs = () => {
//     this.setState({
//       name: "",
//       address: "",
//       postcode: "",
//       phone: "",
//     });
//   };

// //THIS IS CAUSING THE ISSUE
//   displayCustomerList = (posts) => {
//     if (!posts.length) return null;

//     console.log(posts) // I can see the array in the console

//     posts.map((post, index) => (
//       <div key={index} className="customer.list_display">
//         <h3>TEST</h3> //NOT DISPLAYING
//         <h3>{post.name}</h3>
//         <p>{post._id}</p>
//         <p>{post.address}</p>
//         <p>{post.postcode}</p>
//         <p>{post.phoneNumber}</p>
//       </div>
//     ));
//   };

//   render() {
//     console.log("State: ", this.state);

   
//     return (
//       <React.Fragment>
//         <div className="py-5">
//           <div className="container">
//             <Link to="/">Logout</Link>
//           </div>
//         </div>
//         <div className="card-footer d-flex justify-content-between">
//           <form onSubmit={this.submit} className="py-5">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//                 className="nameInput"
//               />
//             </div>
//             <div className="form-input">
//               <input
//                 type="address"
//                 name="address"
//                 placeholder="Address"
//                 value={this.state.address}
//                 onChange={this.handleChange}
//                 className="addressInput"
//               />
//             </div>
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="postcode"
//                 placeholder="Postcode"
//                 value={this.state.postcode}
//                 onChange={this.handleChange}
//                 className="postcodeInput"
//               />
//             </div>
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone number"
//                 value={this.state.phone}
//                 onChange={this.handleChange}
//                 className="phoneInput"
//               />
//             </div>
//           </form>
//         </div>

//         <div>
//           {/* <CustomerList /> */}
//         </div>

//         //NOTHING IS BEING DISPLAYED
//         <div className="blog-">
//           {this.displayCustomerList(this.state.posts)}
//         </div>

//       </React.Fragment>
//     );
//   }
// }