import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import './styles.css';
import { Pagination } from 'swiper/modules';

const Reviews = () => {
    const [sliderPerView, setSliderView] = useState(3);
    const [Revies, setRevies] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get('https://jobs-1-k030.onrender.com/api/v1/get-reviews');
                console.log("Reviews", res.data);
                setRevies(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchReviews();
    }, []);

    useEffect(() => {
        const updateSliderView = () => {
            if (window.innerWidth < 768) {
                setSliderView(1);
            } else {
                setSliderView(3);
            }
        };

        updateSliderView();

        window.addEventListener('resize', updateSliderView);

        return () => {
            window.removeEventListener('resize', updateSliderView);
        };
    }, []);

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our Testimonials</h2>
                <Swiper
                    slidesPerView={sliderPerView}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8"
                >
                    {Revies.reverse().map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                                <div className=" w-40 flex items-center mx-auto p-2 h-40 ">
                                    <img src={item.userImage} alt="user avatar" className="rounded-[50%] object-cover object-center h-full w-full" />
                                </div>
                                <div className="px-2 text-center py-3 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">

                                    <h4 className="text-xl text-gray-900 font-medium leading-8 ">{item.userName}</h4>
                                    {Array.from({ length: item.numberOfStars }).map((_, index) => (
                                        <span className='text-3xl text-orange-400' key={index}>&#x2605;</span>
                                    ))}

                                    <p className="text-gray-500 leading-6 mb-10">{item.textReview}</p>
                                    <span className="text-[#EEFF41] font-medium mb-3 block">{new Date(item.dateOfReview).toLocaleDateString()}</span>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
