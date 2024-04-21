import React, { useEffect } from 'react'
import Hero from '../../Components/Hero/Hero'
import Type from '../../Components/Type/Type'
import News from '../../Components/News/News'
import Reviews from '../../Components/Reviews/Reviews'
import Contact from '../../Components/Contact/Contact'
import UserReviews from '../Review/UserReview'

const Home = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[])
  return (
    <div>
        <Hero/>
        <Type/>
        <News/>
        <UserReviews/>
        <Reviews/>
        <Contact/>
    </div>
  )
}

export default Home