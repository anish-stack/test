import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

const JobInfo = () => {
    const { id } = useParams();
    const [jobInfo, setJobInfo] = useState(null);

    useEffect(() => {
        const fetchJobInfo = async () => {
            try {
                const res = await axios.get(`https://jobs-1-k030.onrender.com/api/v1/get-job-by/${id}`);
                setJobInfo(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchJobInfo();
    }, [id]);

    if (!jobInfo) {
        return <div>Loading...</div>;
    }

    return (
        <>
           <Header/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="py-12">
                <h1 className="text-3xl font-bold mb-4">{jobInfo.companyName} Job Information</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Job Details</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{jobInfo.jobDescription}</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Type of Job</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.typeOfJobs}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Minimum Salary</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.minSalary}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Maximum Salary</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.maxSalary}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Number of Persons Needed</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.numberOfPersonsNeeded}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Eligibility</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.eligibility}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Date of Post</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{new Date(jobInfo.dateOfPostJob).toLocaleDateString()}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Skills Required</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="list-disc pl-4">
                                        {jobInfo.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Company Details</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.companyDetails}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Responsibilities</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="list-disc pl-4">
                                        {jobInfo.responsibilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Department</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.department}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Recruiter Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.recruiterName}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Recruiter Number</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.recruiterNumber}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Recruiter Call Time</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.recruiterCallTime}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Job Active</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.JobActive ? 'Yes' : 'No'}</dd>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <dt className="text-sm font-medium text-gray-500 sm:w-1/4">Calling Day</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{jobInfo.CallingDay}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default JobInfo;
