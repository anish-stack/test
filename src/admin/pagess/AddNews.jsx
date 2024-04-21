import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const AddNews = () => {
    const [formData, setFormData] = useState({
        NewsImage: '',
        NewsHead: '',
        NewsSmallDis: '',
        NewsSecondHead: '',
        NewsBigDis: '',
        ListItem: Array.from({ length: 5 }, () => ''),
        EndMsg: ''
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
    
        // If index is defined, it's for List Items
        if (index !== undefined) {
            const newListItems = [...formData.ListItem];
            newListItems[index] = value;
            setFormData({ ...formData, ListItem: newListItems });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://jobs-1-k030.onrender.com/api/v1/create-news', formData);
            // Clear form fields after successful submission
            setFormData({
                NewsImage: '',
                NewsHead: '',
                NewsSmallDis: '',
                NewsSecondHead: '',
                NewsBigDis: '',
                ListItem: Array.from({ length: 5 }, () => ''),
                EndMsg: ''
            });
            alert('News added successfully!');
        } catch (error) {
            console.log(error);
            alert('Failed to add news. Please try again.');
        }
    }
    return (
     <>
     <Header/>
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add News</h1>
            <form onSubmit={handleSubmit} className="w-full ">
                <div className="mb-4">
                    <label htmlFor="NewsImage" className="block text-gray-700 font-bold mb-2">News Image URL</label>
                    <input
                        type="text"
                        id="NewsImage"
                        name="NewsImage"
                        value={formData.NewsImage}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="NewsHead" className="block text-gray-700 font-bold mb-2">News Headline</label>
                    <input
                        type="text"
                        id="NewsHead"
                        name="NewsHead"
                        value={formData.NewsHead}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="NewsSmallDis" className="block text-gray-700 font-bold mb-2">News Small Description</label>
                    <input
                        type="text"
                        id="NewsSmallDis"
                        name="NewsSmallDis"
                        value={formData.NewsSmallDis}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="NewsSecondHead" className="block text-gray-700 font-bold mb-2">News Second Headline</label>
                    <input
                        type="text"
                        id="NewsSecondHead"
                        name="NewsSecondHead"
                        value={formData.NewsSecondHead}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="NewsBigDis" className="block text-gray-700 font-bold mb-2">News Big Description</label>
                    <textarea
                        id="NewsBigDis"
                        name="NewsBigDis"
                        value={formData.NewsBigDis}
                        onChange={handleChange}
                        rows="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ListItem" className="block text-gray-700 font-bold mb-2">List Items</label>
                    {formData.ListItem.map((item, index) => (
                        <textarea
                            key={index}
                            id={`ListItem${index}`}
                            name={`ListItem${index}`}
                            value={formData.ListItem[index]}
                            onChange={(e) => handleChange(e, index)}
                            rows="2"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            placeholder={`List Item ${index + 1}`}
                            required
                        />
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="EndMsg" className="block text-gray-700 font-bold mb-2">End Message</label>
                    <textarea
                        id="EndMsg"
                        name="EndMsg"
                        value={formData.EndMsg}
                        onChange={handleChange}
                        rows="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add News
                    </button>
                </div>
            </form>
        </div>
     </>
    );
};

export default AddNews;
