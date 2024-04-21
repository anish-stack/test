import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const AllApply = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jobs-1-k030.onrender.com/api/v1/Apply-jobs');
                setApplications(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.post(`https://jobs-1-k030.onrender.com/api/v1/delete-apply/${id}`);
            setApplications(applications.filter(app => app._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Header/>
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">All Job Applications</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Candidate Name</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Gender</th>
                            <th className="px-4 py-2">Contact Number</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Address</th>
                            <th className="px-4 py-2">Company Name</th>
                            <th className="px-4 py-2">Job Type</th>
                            <th className="px-4 py-2">Job ID</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(application => (
                            <tr key={application._id}>
                                <td className="border px-4 py-2">{application.CandidateName}</td>
                                <td className="border px-4 py-2">{application.CandidateAge}</td>
                                <td className="border px-4 py-2">{application.CandidateGender}</td>
                                <td className="border px-4 py-2">{application.ContactNumber}</td>
                                <td className="border px-4 py-2">{application.Email}</td>
                                <td className="border px-4 py-2">{application.Address}</td>
                                <td className="border px-4 py-2">{application.companyName}</td>
                                <td className="border px-4 py-2">{application.jobType}</td>
                                <td className="border underline text-blue-400 cursor-pointer hover:text-blue-700 px-4 py-2"> <Link to={`/job-info/${application.JobId}`}> {application.JobId}</Link></td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(application._id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AllApply;
