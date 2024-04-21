import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const AddReviews = () => {
    const [formData, setFormData] = useState({
        userName: '',
        textReview: '',
        numberOfStars: '',
        userImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://jobs-1-k030.onrender.com/api/v1/create-review', formData);
            // Clear form fields after successful submission
            setFormData({
                userName: '',
                textReview: '',
                numberOfStars: '',
                userImage: ''
            });
            alert('Review added successfully!');
        } catch (error) {
            console.log(error);
            alert('Failed to add review. Please try again.');
        }
    };

    return (
 <>
 <Header/>
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Add Review</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="textReview" className="block text-sm font-medium text-gray-700">Review</label>
                    <textarea
                        id="textReview"
                        name="textReview"
                        value={formData.textReview}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="numberOfStars" className="block text-sm font-medium text-gray-700">Number of Stars</label>
                    <input
                        type="number"
                        id="numberOfStars"
                        name="numberOfStars"
                        value={formData.numberOfStars}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userImage" className="block text-sm font-medium text-gray-700">User Image URL</label>
                    <input
                        type="text"
                        id="userImage"
                        name="userImage"
                        value={formData.userImage}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Review
                    </button>
                </div>
            </form>
        </div>
 </>
    );
};

export default AddReviews;
