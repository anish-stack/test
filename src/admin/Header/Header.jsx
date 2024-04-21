import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Header = () => {
  // const {email,password}=useParams()
  // const [admin,setAdmin] = useState()
  // if(email ==="eightxadmin@" && password === "eightxadmin14"){

  // }
  return (
    <div className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin-Header</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/all-jobs" className="hover:text-gray-300">All Jobs</Link>
          </li>
          <li>
            <Link to="/all-calls" className="hover:text-gray-300">All Calls</Link>
          </li>
          <li>
            <Link to="/all-reviews" className="hover:text-gray-300">All Reviews</Link>
          </li>
          <li>
            <Link to="/all-apply-jobs" className="hover:text-gray-300">All Apply Jobs</Link>
          </li>
          <li>
            <Link to="/all-news" className="hover:text-gray-300">All News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
