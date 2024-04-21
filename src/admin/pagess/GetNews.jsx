import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const GetNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jobs-1-k030.onrender.com/api/v1/get-news');
                setNews(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.post(`https://jobs-1-k030.onrender.com/api/v1/delete-news/${id}`);
            setNews(news.filter(item => item._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Header/>
        <div className="container mx-auto">
        <div className='flex items-center justify-between max-w-7xl px-3 py-3 mx-auto'>
                <h1 className="text-2xl font-bold mb-4">All News</h1>
                <Link to="/Add-News" className="text-lg px-2 py-2 rounded-md cursor-pointer bg-violet-700 text-wrap text-white font-bold mb-4"><i className="ri-function-add-line"></i>Add News</Link>

            </div>    
            {news.map(item => (
                <div key={item._id} className="border rounded-lg p-4 mb-4">
                    <img src={item.NewsImage} alt="News" className="w-52 h-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">{item.NewsHead}</h2>
                    <p className="text-gray-700 text-sm mb-4">{item.NewsSmallDis}</p>
                    <h3 className="text-lg font-bold mb-2">{item.NewsSecondHead}</h3>
                    <p className="text-gray-700 mb-4">{item.NewsBigDis}</p>
                    <ul className="list-disc list-inside mb-4">
                        {item.ListItem.map((li, index) => (
                            <li key={index} className="text-gray-700">{li}</li>
                        ))}
                    </ul>
                    <p className="text-gray-700">{item.EndMsg}</p>
                    <div className="flex justify-end mt-4">
                        <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>

    );
};

export default GetNews;
