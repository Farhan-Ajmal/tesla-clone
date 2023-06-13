// import React, { useRef, useState } from "react";
// import InputMask from 'react-input-mask';
// import { RxCross2 } from "react-icons/rx";
// import firestore from "../../firebase";
// import { states } from "../../data/statesData";
// import getZipCode from "../getZipCode";
// import { InvestmentData, PartnerShipData } from "../../data/partnershipOptionsData";
// function FormModal(props) {
//   const messageref = useRef();
//   //const reff = collection(getFirestore,"users");
//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     partnership: "",
//     state: "",
//     zipCode: "",
//   });


//   const handleInputChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const zipCode = getZipCode(value.toLowerCase().replace(/\s+/g, ''));
//     setFormValues((values) => ({ ...values, [name]: value, zipCode: zipCode }));
//   };

//   const saveData = () => {
//     // Get a reference to the collection you want to store data in
//     const collectionRef = firestore.collection('TestTable');
//     // Create a new document with a unique ID (Firestore will generate the ID)
//     const newDocRef = collectionRef.doc();
//     // Set the data you want to store in the document
//     const data = {
//       field1: formValues.name,
//       field2: formValues.email,
//       field3: formValues.phone,
//       field4: formValues.partnership,
//       field5: formValues.state,
//       field6: formValues.zipCode,
//     };
//     // Save the data to Firestore
//     newDocRef
//       .set(data)
//       .then(() => {
//         console.log('Data stored successfully!');
//       })
//       .catch((error) => {
//         console.error('Error storing data: ', error);
//       });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     //const collectionRef = doc(database, 'users');
//     let t0 = performance.now();
//     saveData();
//     let t1 = performance.now();
//     console.log('Time taken to execute add function:' + (t1 - t0) + ' milliseconds');
//     // handle firebase shit
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-[#000000cc] flex justify-center items-center backdrop-blur-sm px-2 py-4 ">
//       <div className="bg-white rounded-md max-w-[400px] max-h-[80vh] md:max-w-full md:max-h-full overflow-y-scroll">
//         <div className="modal-header">

//           <div className="bg-none flex justify-end w-full">
//             <RxCross2
//               onClick={props.closePartner ? props.closePartner : props.closeInvest}
//               size={24}
//               className="cursor-pointer"
//             />
//           </div>
//         </div>

//         <div className="modal-body ">
//           <div className="container mx-2 md:mx-0 mt-4 md:mt-0  ">
//             <div className="grid grid-cols-12">
//               <div className="col-span-2 hidden md:block"></div>
//               <div className="col-span-12 md:col-span-8 text-center rounded-lg">
//                 <form
//                   className="bg-white rounded-lg px-6 pt-1 md:pt-6 pb-2 md:pb-12 mb-4"
//                   onSubmit={handleFormSubmit}
//                 >

//                   <h4 className="text-2xl pb-7">Send Message</h4>
//                   <div className="mb-4">
//                     <input
//                       className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       id="name"
//                       type="text"
//                       name="name"
//                       value={formValues.name}
//                       onChange={handleInputChange}
//                       placeholder="Name"
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <input
//                       className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       id="email"
//                       type="email"
//                       name="email"
//                       value={formValues.email}
//                       onChange={handleInputChange}
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <InputMask
//                       className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       mask="(999) 999-9999"
//                       placeholder="(123) 456-7890"
//                       maskChar="_"
//                       onChange={handleInputChange}
//                     />
//                   </div>

//                   <div className="mb-6">
//                     <select
//                       id="partnership"
//                       name="partnership"
//                       className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
//                       value={formValues.partnership}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="" disabled hidden>
//                         {props.closeInvest ? "Select Investment Type" : "Select Partnership Type"}
//                       </option>
//                       {props.closeInvest ? InvestmentData.map((partnership, index) =>
//                         <option key={index} value={partnership.category}>{partnership.category}</option>
//                       ) : PartnerShipData.map((partnership, index) =>
//                         <option key={index} value={partnership.category}>{partnership.category}</option>
//                       )}
//                     </select>
//                   </div>
//                   <div className="mb-6">
//                     <select
//                       id="state"
//                       name="state"
//                       className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
//                       value={formValues.state}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option className="text-gray-700" value="" disabled hidden>
//                         Select a state
//                       </option>
//                       {states.map((state, index) =>
//                         <option className="text-gray-700" key={index} value={state.name}>{state.name}</option>
//                       )}
//                     </select>

//                   </div>
//                   <div className="mb-6">
//                     <input
//                       id="zipcode"
//                       name="zipcode"
//                       type="text"
//                       className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       placeholder="zipcode"
//                       value={formValues.zipCode}
//                       readOnly
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <p className="text-[#595959] text-sm">
//                       This site is protected by reCAPTCHA and the Google Privacy
//                       Policy and Terms of Service apply.
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-center">
//                     <button
//                       className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold py-2 px-7 rounded  focus:outline-none focus:shadow-outline"
//                       type="submit"
//                     >
//                       SEND
//                     </button>
//                   </div>
//                 </form>
//               </div>
//               <div className="col-span-2 hidden md:block"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default FormModal;

import React, { useRef, useState } from "react";
import InputMask from 'react-input-mask';
import { RxCross2 } from "react-icons/rx";
import firestore from "../../firebase";
import { states } from "../../data/statesData";
import getZipCode from "../getZipCode";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import checkedImg from "../../assets/images/checked.png"
import { InvestmentData, PartnerShipData } from "../../data/partnershipOptionsData";
function FormModal(props) {
  const messageref = useRef();
  //const reff = collection(getFirestore,"users");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    partnership: "",
    state: "",
    zipCode: "",
  });

  const [dialogBox, setDialogBox] = useState(false)


  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const zipCode = getZipCode(value.toLowerCase().replace(/\s+/g, ''));
    setFormValues((values) => ({ ...values, [name]: value, zipCode: zipCode }));
  };




  const saveData = () => {
    // Get a reference to the collection you want to store data in
    const collectionRef = firestore.collection('TestTable');
    // Create a new document with a unique ID (Firestore will generate the ID)
    const newDocRef = collectionRef.doc();
    // Set the data you want to store in the document
    const data = {
      field1: formValues.name,
      field2: formValues.email,
      field3: formValues.phone,
      field4: formValues.partnership,
      field5: formValues.state,
      field6: formValues.zipCode,
    };
    // Save the data to Firestore
    newDocRef
      .set(data)
      .then(() => {
        console.log('Data stored successfully!');
        handleDisplay(true)
        setFormValues({
          name: "",
          email: "",
          phone: "",
          partnership: "",
          state: "",
          zipCode: "",
        });
      })
      .catch((error) => {
        console.error('Error storing data: ', error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //const collectionRef = doc(database, 'users');
    let t0 = performance.now();
    saveData();
    let t1 = performance.now();
    console.log('Time taken to execute add function:' + (t1 - t0) + ' milliseconds');
    // handle firebase shit
    setDialogBox(true)

    props.closePartner ? props.closePartner() : props.closeInvest()
    alert("information submit succefully");
  };

  const [openDialog, handleDisplay] = useState(false);

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const dialogStyle = {
    padding: "10px",
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-[#000000cc] flex justify-center items-center backdrop-blur-sm px-2 py-4">
      <div className="bg-white rounded-md max-w-[400px] max-h-[80vh] md:max-w-full md:max-h-full overflow-y-scroll">
        <div className="modal-header">

          <div className="bg-none flex justify-end w-full p-5">
            <RxCross2
              onClick={props.closePartner ? props.closePartner : props.closeInvest}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="modal-body ">
          <div className="container mx-2 md:mx-0 mt-4 md:mt-0  ">
            <div className="grid grid-cols-12">
              <div className="col-span-2 hidden md:block"></div>
              <div className="col-span-12 md:col-span-8 text-center rounded-lg">
                <form
                  className="bg-white rounded-lg px-6 pt-1 md:pt-6 pb-2 md:pb-12 mb-4"
                  onSubmit={handleFormSubmit}
                >

                  <h4 className="text-2xl pb-7">Send Message</h4>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-6">
                    <InputMask
                      className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      mask="(999) 999-9999"
                      placeholder="(123) 456-7890"
                      value={formValues.phone}
                      name="phone"
                      maskChar="_"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <select
                      id="partnership"
                      name="partnership"
                      className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      value={formValues.partnership}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled hidden>
                        {props.closeInvest ? "Select Investment Type" : "Select Partnership Type"}
                      </option>
                      {props.closeInvest ? InvestmentData.map((partnership, index) =>
                        <option key={index} value={partnership.category}>{partnership.category}</option>
                      ) : PartnerShipData.map((partnership, index) =>
                        <option key={index} value={partnership.category}>{partnership.category}</option>
                      )}
                    </select>
                  </div>
                  <div className="mb-6">
                    <select
                      id="state"
                      name="state"
                      className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      value={formValues.state}
                      onChange={handleInputChange}
                      required
                    >
                      <option className="text-gray-700" value="" disabled hidden>
                        Select a state
                      </option>
                      {states.map((state, index) =>
                        <option className="text-gray-700" key={index} value={state.name}>{state.name}</option>
                      )}
                    </select>

                  </div>
                  <div className="mb-6">
                    <input
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="zipcode"
                      value={formValues.zipCode}
                      readOnly
                    />
                  </div>
                  <div className="mb-6">
                    <p className="text-[#595959] text-sm">
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy and Terms of Service apply.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold py-2 px-7 rounded  focus:outline-none focus:shadow-outline"
                      type="submit"
                      onClick={openDialogBox}
                    >
                      SEND
                    </button>
                   
                  </div>
                </form>
              </div>
              <div className="col-span-2 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
      {dialogBox && <Dialog onClose={handleClose} open={openDialog}>
                      <div className="z-50" style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={dialogStyle} >
                          Information Saved successfully
                        </h3>
                        <img src={checkedImg} alt="Image" style={{ maxWidth: 20, maxHeight: 20, marginRight: 10 }} />
                      </div>

                    </Dialog>}
    </div>
  );
}

export default FormModal;