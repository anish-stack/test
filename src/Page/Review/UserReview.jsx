import React, { useState } from 'react';
import axios from 'axios';

const UserReviews = () => {
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
    const handleStarClick = (starValue) => {
        setFormData({ ...formData, numberOfStars: starValue });
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={` text-orange-600 p-3 cursor-pointer text-3xl ri-star-${i <= formData.numberOfStars ? 'fill' : 'line'}`}
                    onClick={() => handleStarClick(i)}
                ></i>
            );
        }
        return stars;
    };

    return (
 <>

        <div className="max-w-5xl mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Please Rate Us ❤️🥰</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Good Name</label>
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
                    <label htmlFor="textReview" className="block text-sm font-medium text-gray-700">Write Something About Our Services</label>
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
                    <label htmlFor="numberOfStars" className="block text-sm font-medium text-gray-700">Could you please rate our services on a scale of 1 to 5? We greatly appreciate your feedback!</label>
                    <div className="flex">
                        {renderStars()}
                    </div>
                </div>
                <div>
                    <label htmlFor="userImage" className="block text-sm font-medium text-gray-700">Could you kindly provide your image link, please? <a className='text-blue-400 underline' target='_blank' href="https://imgbb.com/">For Image link Use Imgbb service</a> </label>
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
                    <button type="submit" className="bg-[#EEFF41] hover:bg-[#EEFF41] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Review
                    </button>
                </div>
            </form>
        </div>
 </>
    );
};

export default UserReviews;
