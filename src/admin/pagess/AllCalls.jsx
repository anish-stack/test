import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const AllCalls = () => {
    const [calls, setCalls] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://jobs-1-k030.onrender.com/api/v1/get-Call');
            setCalls(res.data); // Update state with fetched data
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const deleteCall = async (id) => {
        try {
            console.log('Deleting call with id:', id);
            const res = await axios.delete(`https://jobs-1-k030.onrender.com/api/v1/delete-call/${id}`);
          
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }
    
    const updateCall = async (id) => {
        try {
            console.log('Updating call with id:', id);
            const res = await axios.put(`https://jobs-1-k030.onrender.com/api/v1/update-status/${id}`);
          
            fetchData(); // Update state with fetched data
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <Header />
            <div className="container px-5 min-h-screen mx-auto">
                <h1 className="text-2xl font-bold mb-4">All Calls</h1>
                <table className="table-auto px-5   w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Message</th>
                            <th className="border px-4 py-2">Contact Number</th>
                            <th className="border px-4 py-2">Status</th>
                            <th className="border px-4 py-2">Created At</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calls.map(call => (
                            <tr key={call._id}>
                                <td className="border px-4 py-2">{call.name}</td>
                                <td className="border px-4 py-2">{call.email}</td>
                                <td className="border px-4 py-2">{call.message}</td>
                                <td className="border px-4 py-2">{call.contactNumber}</td>
                                <td className="border px-4 py-2">{call.Status}</td>
                                <td className="border px-4 py-2">{new Date(call.createdAt).toLocaleDateString()}</td>
                                <td className="border flex gap-2 px-4 py-2">
                                    <button onClick={() => updateCall(call._id)} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
                                        Update
                                    </button>

                                    <button onClick={() => deleteCall(call._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllCalls;
