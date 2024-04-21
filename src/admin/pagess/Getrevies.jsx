import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const GetReviews = () => {
    const [reviews, setReviews] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://jobs-1-k030.onrender.com/api/v1/get-reviews');
            setReviews(res.data); // Update state with fetched data
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const makeActive = async (id) => {
        try {
            await axios.put(`https://jobs-1-k030.onrender.com/api/v1/update-review/${id}`, { active: true });
            fetchData(); // Refresh reviews after updating
        } catch (error) {
            console.log(error);
        }
    }

    const deleteReview = async (id) => {
        try {
            await axios.delete(`https://jobs-1-k030.onrender.com/api/v1/delete-review/${id}`);
            fetchData(); // Refresh reviews after deletion
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto">
            <div className='flex items-center justify-between max-w-7xl px-3 py-3 mx-auto'>
                <h1 className="text-2xl font-bold mb-4">All Reviews</h1>
                <Link to="/Add-reviews/admin" className="text-lg px-2 py-2 rounded-md cursor-pointer bg-violet-700 text-wrap text-white font-bold mb-4"><i className="ri-function-add-line"></i>Add Reviwes</Link>

            </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">User Name</th>
                            <th className="border px-4 py-2">Review</th>
                            <th className="border px-4 py-2">Stars</th>
                            
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review._id}>
                                <td className="border px-4 py-2">{review.userName}</td>
                                <td className="border px-4 py-2">{review.textReview}</td>
                                <td className="border px-4 py-2">{review.numberOfStars}</td>
                               
                                <td className="border px-4 py-2">{new Date(review.dateOfReview).toLocaleDateString()}</td>
                                <td className="border flex gap-2 px-4 py-2">
                                   
                                    <button onClick={() => deleteReview(review._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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

export default GetReviews;
