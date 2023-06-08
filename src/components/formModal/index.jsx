import React from 'react'
import { RxCross2 } from 'react-icons/rx';
function FormModal(props) {
    return (
        <div className="">
            {/* <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 text-center rounded-lg"> */}
                    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                        <div className="bg-none flex justify-end w-full">
                            <RxCross2  onClick={props.closeModal} size={24} className='cursor-pointer' />
                        </div>
                        <h4 className="text-2xl pb-7">
                            Send Message
                        </h4>
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-6">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />

                        </div>
                        <div className="mb-6">
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows={6}
                                placeholder="Message">

                            </textarea>
                        </div>
                        <div className="mb-6">
                            <p className='text-[#595959] text-sm'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p></div>
                        <div className="flex items-center justify-center">
                            <button className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold py-2 px-7 rounded  focus:outline-none focus:shadow-outline" type="button">
                                SEND
                            </button>

                        </div>
                    </form>
                {/* </div>
            </div> */}
        </div>
    )
}

export default FormModal