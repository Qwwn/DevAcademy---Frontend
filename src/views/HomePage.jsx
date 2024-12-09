import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
            <p className="text-lg text-gray-600 mb-4">Your journey begins here.</p>
            <Link
                to="/login"
                className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded hover:bg-blue-700 transition">
                Go to Login
            </Link>
        </div>
    );
}

export default HomePage;