import React from 'react';

const Soon = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
                <p className="text-gray-700 mb-8">Our app is currently under development. Stay tuned for updates!</p>
                <div className="flex justify-center">
                    <img src="https://externlabs.com/blogs/wp-content/uploads/2022/04/b2.jpg" alt="Coming Soon" className="w-32 h-32" />
                </div>
            </div>
        </div>
    );
};

export default Soon;
