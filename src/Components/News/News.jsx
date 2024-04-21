import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const News = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('https://jobs-1-k030.onrender.com/api/v1/get-news');
                console.log(res.data);
                setNewsList(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest News</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8">
                    {newsList.map((item, index) => (
                        <div key={index} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div className="flex items-center">
                                <img src={item.NewsImage} alt="blogs tailwind section" className="rounded-t-2xl w-full" />
                            </div>
                            <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                                <span className="text-indigo-600 font-medium mb-3 block">{new Date(item.createdAt).toLocaleDateString()}</span>
                                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{item.NewsHead}</h4>
                                <p className="text-gray-500 leading-6 mb-10">{item.NewsSmallDis}</p>
                                <Link to={`/News/${item._id}`} className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
