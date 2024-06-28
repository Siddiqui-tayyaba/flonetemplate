import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../components/LoginHeader';

interface AccountProps {
    username: string;
}

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Account', path: '/account' },
];

const Account: React.FC<AccountProps> = ({ username }) => {
    return (
        <div>
            <Header pages={pages}/>
            <div className="bg-blue-200 min-h-screen flex flex-col ">
            <h1 className="text-3xl font-bold mb-4">My Account</h1>
                <div className="container mx-auto px-4 py-8 text-center">
                    
                    <p className="text-lg font-bold mb-8">Welcome, {username}!</p>
                    <Link to="/login" className="text-blue-600 underline">Don't have an account? Login here.</Link>
                </div>
            </div>
        </div>
    );
};

export default Account;
