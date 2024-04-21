
import Header from '../Header/Header';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllAdminJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(15); // Number of jobs per page


    const fetchJobs = async () => {
        try {
            const response = await axios.get('https://jobs-1-k030.onrender.com/api/v1/get-job');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };



    useEffect(() => {
        fetchJobs()
    }, [])
    const deleteJob = async (id) => {
        console.log(id)
        try {
            const response = await axios.post(`https://jobs-1-k030.onrender.com/api/v1/delete-job/${id}`);
            console.log(response)
            fetchJobs()
            alert("Delete")
        } catch (error) {
            console.error('Error delete jobs:', error);
        }
    };
    // Get current jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
         <Header />
        <div className="container min-h-screen mx-auto">
           
            <div className='flex items-center justify-between max-w-7xl px-3 py-3 mx-auto'>
                <h1 className="text-2xl font-bold mb-4">All Jobs</h1>
                <Link to="/Add-jobs" className="text-lg px-2 py-2 rounded-md cursor-pointer bg-violet-700 text-wrap text-white font-bold mb-4"><i className="ri-function-add-line"></i>Add Job</Link>

            </div>    
              <div className=" p-5  text-left overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Company Name</th>
                            <th className="px-4 py-2">Type of Job</th>
                            <th className="px-4 py-2">Recruiter Name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentJobs.map(job => (
                            <tr key={job._id}>
                                <td className="border px-4 py-2">{job.companyName}</td>
                                <td className="border px-4 py-2">{job.typeOfJobs}</td>
                                <td className="border px-4 py-2">{job.recruiterName}</td>
                                <td className="border px-4 py-2">
                                    <button onClick={() => deleteJob(job._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <nav>
                    <ul className="pagination">
                        {jobs.length > 0 && (
                            Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map((_, index) => (
                                <li key={index} className="page-item">
                                    <button onClick={() => paginate(index + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{index + 1}</button>
                                </li>
                            ))
                        )}
                    </ul>
                </nav>
            </div>
            {/* Add Job button */}
        </div>
        </>
    );
};

export default AllAdminJobs;

