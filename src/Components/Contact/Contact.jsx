import React, { useState } from 'react'
import axios from 'axios';
const Contact = () => {
    const [formdata,setFormData]= useState({
        name:"",
        email:"",
        message:"",
        contactNumber:""
    })

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://jobs-1-k030.onrender.com/api/v1/make-call', formdata);
            console.log(response.data); // Log the response from the server
            // Reset form data if needed
            setFormData({
                name: "",
                email: "",
                message: "",
                contactNumber: ""
            });
            window.location.href="/Thankyou"
        } catch (error) {
            console.error(error); // Log any errors
            // Optionally, display an error message to the user
        } 
    };
    
  return (
<div>
<div className="max-w-[1400px] px-4 pt-20 mx-auto p-5">
    <h1 className='text-center text-5xl md:text-7xl font-bold mb-5'>Contact <span className='text-[#7e3af2]'>Us</span> </h1>
    <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
                Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
            Ready to take the next step? Let's connect and discuss how we can help you achieve your goals. Reach out today!
            </p>

       
        </div>
        <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" name='name' value={formdata.name} onChange={handleChange} placeholder="Jane"/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-Contact-number">
                        Contact Number
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" name='contactNumber' value={formdata.contactNumber} onChange={handleChange} type="text" placeholder="0123456789"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-Email">
                        Email Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" name='email' value={formdata.email} onChange={handleChange} type="email" placeholder="********@*****.**"/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                    name='message' value={formdata.message} onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center">
                        <label className="block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <button
                    onClick={handleSubmit}
                        className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                </div>

            </div>

        </form>

    </div>
</div>
</div>
  )
}

export default Contact