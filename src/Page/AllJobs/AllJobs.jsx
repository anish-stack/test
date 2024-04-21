import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const AllJobs = () => {
    const { title } = useParams();
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 6; // Number of jobs to display per page
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      },[])
    const fetchJobs = async () => {
        try {
            const response = await axios.get(`https://jobs-1-k030.onrender.com/api/v1/get-jobs/${title}`);
            if (response.data.length === 0) {
                console.log("No Data");
                setJobs([]);
            } else {
                setJobs(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [title]);

    const handleApply = () => {
        // Handle apply button click
        console.log("Apply button clicked");
    };

    const pageCount = Math.ceil(jobs.length / jobsPerPage);

    const displayJobs = jobs
        .slice(pageNumber * jobsPerPage, (pageNumber + 1) * jobsPerPage).reverse()
        .map((job) => (
            <div key={job._id} className="bg-white mt-5 shadow-xl transition-all cursor-pointer hover:scale-[1.05] p-6 rounded-md">
                <div className="card">
                    <div className="companyName">
                        
                        <h2 className='text-3xl font-bold'>{job.companyName}</h2>
                        <h4 className='text-xl text-gray-400 font-bold'>{job.typeOfJobs}</h4>

                        <div className='flex items-center justify-between'>
                            <p className='text-pretty py-2 font-medium'><i className="ri-calendar-2-line"></i>:-{new Date(job.dateOfPostJob).toLocaleDateString()}</p>
                            <h4 className='text-sm font-bold'>Vacency:-{job.numberOfPersonsNeeded} <i className="ri-user-2-fill"></i></h4>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div>
                            <p className="text-gray-700">Salary: Rs {job.minSalary} - {job.maxSalary}</p>
                            <div className=''>
                                <p className="text-gray-700 mt-3"><b>Skills</b>: {job.skills.join(", ")}</p>
                            </div>
                            <div className='mt-3'>
                                <p className='w-32 rounded-[42px] cursor-pointer hover:bg-violet-600 bg-violet-500 text-center text-white px-2 py-1'>{job.eligibility}</p>
                            </div>
                            <p className='mt-3 font-bold text-gray-900'>{job.jobDescription}</p>
                        </div>
                        <div className='mt-5 text-center'>
                            <Link to={`/Apply/${job._id}/${job.typeOfJobs}/${job.companyName}`} className="w-full hover:bg-orange-600 bg-orange-500 text-white py-2 px-9 mt-4" onClick={handleApply}>Apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        ));

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <div className="max-w-7xl px-4 pt-20 relative z-40 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Render fetched jobs here */}
                {displayJobs.length === 0 ? (
                    <>
                        <div className='flex pt-20 w-full flex-col items-center justify-center'>
                            <img className='w-full' src="https://img.freepik.com/free-vector/construction-tools_24877-63504.jpg?t=st=1712749074~exp=1712752674~hmac=a4376799e0ca4c7b81d8a6e1beda0bc87d99f1b829e52314a95de3ed302f7f04&w=740" alt="" />

                        </div>
                        <div className='text-center'>
                            <p className="text-center text-7xl  flex pt-20 w-full flex-col items-center justify-center text-gray-500">No jobs found</p>
                        </div>
                    </>

                ) : (
                    displayJobs
                )}
            </div>
            {jobs.length > jobsPerPage && (
                <div className="mt-8 flex justify-center">
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'pagination'}
                        previousLinkClassName={'pagination__link'}
                        nextLinkClassName={'pagination__link'}
                        disabledClassName={'pagination__link--disabled'}
                        activeClassName={'pagination__link--active'}
                    />
                </div>
            )}
        </div>
    );
};

export default AllJobs;
