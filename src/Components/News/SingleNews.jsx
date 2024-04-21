import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Contact from '../Contact/Contact';

const SingleNews = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get("https://jobs-1-k030.onrender.com/api/v1/get-news");
                console.log("Fetched data:", res.data);
                const filteredNews = res.data.filter((item) => item._id === id);
                console.log("Filtered news:", filteredNews);
                setNews(filteredNews.length > 0 ? filteredNews[0] : null);
                console.log("News state:", news);
            } catch (error) {
                console.log("Error fetching news:", error);
            }
        };
        fetchNews();
    }, [id]);

    console.log("Component render, news state:", news);

    return (
        <div className="max-w-7xl px-4 pt-20 relative z-40 mx-auto ">
            {news ? (
                <div className='mt-5'>
                    <div className='w-[800px] flex items-center mx-auto '>
                    <img src={news.NewsImage} alt="News Image" className="mb-4 w-full h-auto" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{news.NewsHead}</h2>
                    <p className="text-gray-700 mb-6">{news.NewsSmallDis}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.NewsSecondHead}</h3>
                    <p className="text-gray-700 mb-6">{news.NewsBigDis}</p>
                    <ul className="list-disc list-inside mb-6">
                        {news.ListItem.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                    <p className="text-gray-700 mb-6">{news.EndMsg}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <Contact/>
        </div>
    );
};

export default SingleNews;
