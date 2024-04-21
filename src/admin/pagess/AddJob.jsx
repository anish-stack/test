import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    numberOfPersonsNeeded: 1,
    typeOfJobs: '',
    eligibility: 'Fresher',
    minSalary: 0,
    maxSalary: 0,
    skills: [],
    companyDetails: '',
    jobDescription: '',
    responsibilities: [],
    department: '',
    recruiterName: '',
    recruiterNumber: '',
    recruiterCallTime: '',
    JobCategory: '',
    JobActive: true,
    CallingDay: 'All-Day'
  });

  const handleChange = e => {
    const value = e.target.name === 'skills' || e.target.name === 'responsibilities'
      ? e.target.value.split(',').map(skill => skill.trim())
      : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jobs-1-k030.onrender.com/api/v1/create-job', formData);
      console.log(response.data);
      // Handle success response
      alert("Job Added")
    } catch (error) {
      console.error('Error adding job:', error);
      // Handle error
    }
  };

  return (
    <div className="container mx-auto">
         <Header />
      <h1 className="text-2xl text-center font-bold mb-4">Add Job</h1>
      <form onSubmit={handleSubmit} className=" max-w-7xl mx-auto space-y-4">
     <div className='grid grid-cols-2 gap-2'>
     <div>
          <label htmlFor="companyName" className="block font-bold">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="numberOfPersonsNeeded" className="block font-bold">Number of Persons Needed</label>
          <input
            type="number"
            id="numberOfPersonsNeeded"
            name="numberOfPersonsNeeded"
            value={formData.numberOfPersonsNeeded}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
     </div>
     <div className='grid grid-cols-2 gap-2'>

        <div>
          <label htmlFor="typeOfJobs" className="block font-bold">Type of Jobs</label>
          <input
            type="text"
            id="typeOfJobs"
            name="typeOfJobs"
            value={formData.typeOfJobs}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="eligibility" className="block font-bold">Eligibility</label>
          <input
            type="text"
            id="eligibility"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
     </div>
     <div className='grid grid-cols-3 gap-2'>

        <div>
          <label htmlFor="minSalary" className="block font-bold">Minimum Salary</label>
          <input
            type="number"
            id="minSalary"
            name="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="maxSalary" className="block font-bold">Maximum Salary</label>
          <input
            type="number"
            id="maxSalary"
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="skills" className="block font-bold">Skills [For Mulitple use ,]</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills.join(', ')}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
     </div>
     <div className='grid grid-cols-3 gap-2'>

        <div>
          <label htmlFor="companyDetails" className="block font-bold">Company Details</label>
          <input
            type="text"
            id="companyDetails"
            name="companyDetails"
            value={formData.companyDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
       
        <div>
          <label htmlFor="responsibilities" className="block font-bold">Responsibilities[For Mulitple use ,]</label>
          <input
            type="text"
            id="responsibilities"
            name="responsibilities"
            value={formData.responsibilities.join(',')}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
     </div>
     <div className='grid grid-cols-4 gap-2'>

        <div>
          <label htmlFor="department" className="block font-bold">Department</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
           <option value="" disabled>Select department</option>
            <option value="Sales">Sales</option>
            <option value="Delivery">Delivery</option>
            <option value="Software-Department">Software Department</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Labour">Labour</option>
            <option value="Technician">Technician</option>
            <option value="Non Tech">Non Tech</option>
            <option value="Ward Boy">Ward Boy</option>
            <option value="All-Jobs">All Jobs</option>
          </select>
        </div>
        <div>
          <label htmlFor="recruiterName" className="block font-bold">Recruiter Name</label>
          <input
            type="text"
            id="recruiterName"
            name="recruiterName"
            value={formData.recruiterName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="recruiterNumber" className="block font-bold">Recruiter Number</label>
          <input
            type="tel"
            id="recruiterNumber"
            name="recruiterNumber"
            value={formData.recruiterNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="recruiterCallTime" className="block font-bold">Recruiter Call Time</label>
          <input
            type="time"
            id="recruiterCallTime"
            name="recruiterCallTime"
            value={formData.recruiterCallTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
     </div>
     <div className='grid grid-cols-2 gap-2'>
        <div>
          <label htmlFor="JobCategory" className="block font-bold">Job Category</label>
          <input
            type="text"
            id="JobCategory"
            name="JobCategory"
            value={formData.JobCategory}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="CallingDay" className="block font-bold">Calling Day</label>
          <select
            id="CallingDay"
            name="CallingDay"
            value={formData.CallingDay}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="All-Day">All-Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        </div>
        <div>
          <label htmlFor="jobDescription" className="block font-bold">Job Description</label>
          <textarea
           
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 border rounded"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
