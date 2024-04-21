import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ApplyForJob = () => {
    const { id, name, companyName } = useParams();
    const [formData, setFormData] = useState({
        CandidateName: "",
        CandidateAge: "",
        CandidateGender: "",
        CvLink: "",
        Linkedin: "",
        ContactNumber: "",
        Email: "",
        Address: "",
        companyName: companyName,
        jobType: name,
        JobId: id
        
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation
        if (!formData.CandidateName ||
            !formData.CandidateAge ||
            !formData.CandidateGender ||
            !formData.CvLink ||
            !formData.Linkedin ||
            !formData.ContactNumber ||
            !formData.Email ||
            !formData.Address) {
            alert("Please fill in all fields.");
            return;
        }

        if (isNaN(formData.CandidateAge) || formData.CandidateAge <= 18) {
            alert("Candidate age must be a number greater than 18.");
            return;
        }

        if (!/^\d{10}$/.test(formData.ContactNumber)) {
            alert("Contact number must be a 10-digit Indian number.");
            return;
        }

        try {
            const res = await axios.post('https://jobs-1-k030.onrender.com/api/v1/Apply-Job', formData);
            console.log(res.data);
            window.location.href = "/Thankyou"
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="max-w-7xl px-4 pt-20 relative z-40 mx-auto">
            <h1 className="md:text-5xl text-2xl mt-12 text-center font-bold mb-4">Apply for <span className='text-violet-700'>Job</span></h1>
            <div className='flex w-full items-center justify-between gap-5'>
                <form className=" w-full md:w-1/2" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="candidateName">
                                Candidate Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="candidateName"
                                type="text"
                                name="CandidateName"
                                value={formData.CandidateName}
                                onChange={handleChange}
                                placeholder="Candidate Name"
                            />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="candidateAge">
                                Candidate Age
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="candidateAge"
                                type="text"
                                name="CandidateAge"
                                value={formData.CandidateAge}
                                onChange={handleChange}
                                placeholder="Candidate Age"
                            />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contactNumber">
                                Contact Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="contactNumber"
                                type="text"
                                name="ContactNumber"
                                value={formData.ContactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number"
                            />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="text"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="candidateGender">
                                Candidate Gender
                            </label>
                            <select
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="candidateGender"
                                name="CandidateGender"
                                value={formData.CandidateGender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cvLink">
                                CV Link
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="cvLink"
                                type="text"
                                name="CvLink"
                                value={formData.CvLink}
                                onChange={handleChange}
                                placeholder="CV Link"
                            />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="linkedin">
                                Linkedin
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="linkedin"
                                type="text"
                                name="Linkedin"
                                value={formData.Linkedin}
                                onChange={handleChange}
                                placeholder="Linkedin"
                            />
                        </div>

                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="address"
                                type="text"
                                name="Address"
                                value={formData.Address}
                                onChange={handleChange}
                                placeholder="Address"
                            />
                        </div>
                    </div>
                    <div className="flex text-center items-center justify-center">
                        <button
                            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className='img hidden md:block w-1/2'>
                    <img src="https://img.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948357.jpg?t=st=1712753438~exp=1712757038~hmac=f1c945690e325df0978c010cf7470dc13b26809a3a9671b59419f9abc7a884f8&w=740" className='h-full w-full object-cover object-center' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ApplyForJob;
