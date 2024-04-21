
import './App.css'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import News from './Components/News/News'
import Reviews from './Components/Reviews/Reviews'
import Type from './Components/Type/Type'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import AllJobs from './Page/AllJobs/AllJobs'
import ApplyForJob from './Page/ApplyForJob/ApplyForJob'
import Thankyou from './Page/Thankyou/Thankyou'
import Soon from './Page/CommingSoon/Soon'
import SingleNews from './Components/News/SingleNews'
import Company from './Page/Company/Company'
import { useState } from 'react'
import Headers from './admin/Header/Header'
import AllAdminJobs from './admin/pagess/AllJobs'
import AddJobForm from './admin/pagess/AddJob'
import AllCalls from './admin/pagess/AllCalls'
import Getrevies from './admin/pagess/Getrevies'
import GetNews from './admin/pagess/GetNews'
import AddNews from './admin/pagess/AddNews'
import AllApply from './admin/pagess/AllApply'
import JobInfo from './admin/pagess/JobInfo'
import Addrevies from './admin/pagess/Addrevies'
import UserReviews from './Page/Review/UserReview'
function App() {



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/jobs'} element={<Type />} />
        <Route path={'/News'} element={<News />} />
        <Route path={'/Testinomial'} element={<Reviews />} />
        <Route path={'/Contact'} element={<Contact />} />
        <Route path={'/Jobs/:title'} element={<AllJobs />} />
        <Route path={'/Thankyou'} element={<Thankyou />} />
        <Route path={'/Soon'} element={<Soon />} />
        <Route path={'/News/:id'} element={<SingleNews />} />
        <Route path='/Company' element={<Company />} />
        <Route path={'/Apply/:id/:name/:companyName'} element={<ApplyForJob />} />
        <Route path='/user-add-reviews' element={<UserReviews />} />


        {/* Admin-Routes */}
        <Route path='/admin/eightxindia/passwordeightx' element={<Headers />} />
        <Route path='/all-jobs' element={<AllAdminJobs />} />
        <Route path='/Add-jobs' element={<AddJobForm />} />
        <Route path='/all-calls' element={<AllCalls />} />
        <Route path='/all-reviews' element={<Getrevies />} />
        <Route path='/all-news' element={<GetNews />} />
        <Route path='/Add-reviews/admin' element={<Addrevies />} />

        <Route path='/Add-news' element={<AddNews />} />
        <Route path='/all-apply-jobs' element={<AllApply />} />
        <Route path='/job-info/:id' element={<JobInfo />} />















      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
