import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
function FormModal(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues) + ".")
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900">
      <div className="container mx-2 md:mx-0 ">
        <div className="grid grid-cols-12">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-12 md:col-span-8 text-center rounded-lg">
            <form
              className="bg-white shadow-md rounded-lg px-6 md:px-14 pt-6 pb-12 mb-4"
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
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows={6}
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                ></textarea>
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
    // <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900">
    //   <div class="relative w-full max-w-2xl max-h-full">
    //     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //       <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
    //         <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
    //           Static modal
    //         </h3>
    //         <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
    //           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //         </button>
    //       </div>
    //       <div class="p-6 space-y-6">
    //         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //           With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    //         </p>
    //         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //           The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    //         </p>
    //       </div>
    //       <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
    //         <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
    //         <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default FormModal;
