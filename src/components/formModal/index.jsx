import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import firestore from "../../firebase";
import { states } from "../../data/statesData";
import getZipCode from "../getZipCode";
import { PartnerShipData } from "../../data/partnershipOptionsData";
function FormModal(props) {
  const messageref = useRef();
  //const reff = collection(getFirestore,"users");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    partnership: "",
    state: "",
    zipCode: "",
  });


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
      field3: formValues.partnership,
      field4: formValues.state,
      field5: formValues.zipCode,
    };
    // Save the data to Firestore
    newDocRef
      .set(data)
      .then(() => {
        console.log('Data stored successfully!');
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
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900">
      <div className="container mx-2 md:mx-0 mt-4 md:mt-0">
        <div className="grid grid-cols-12">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-12 md:col-span-8 text-center rounded-lg">
            <form
              className="bg-white shadow-md rounded-lg px-6 md:px-14 pt-1 md:pt-6 pb-2 md:pb-12 mb-4"
              onSubmit={handleFormSubmit}
            >
              <div className="bg-none flex justify-end w-full">
                <RxCross2
                  onClick={props.closePartner ? props.closePartner : props.closeInvest}
                  size={24}
                  className="cursor-pointer"
                />
              </div>
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
                <select
                  id="partnership"
                  name="partnership"
                  className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={formValues.partnership}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select Partnership Type
                  </option>
                  {PartnerShipData.map((partnership, index) =>
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
  );
}

export default FormModal;