import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/LoginHeader';
const pages = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    
];
const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in with', username, password);
    };

    return (
        <div>
           <Header pages={pages} />        
        <div className="bg-blue-200 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-semibold mb-4">Login </h1>
            <form className="w-full max-w-sm">
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Register
                    </Link>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;
