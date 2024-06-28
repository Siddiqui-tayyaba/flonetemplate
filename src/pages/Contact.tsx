import React, { useState } from 'react';
import Header from '../components/LoginHeader';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
];

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Submitting', { name, email, message });
    };

    return (
        <div className="container mx-auto py-12">
            <Header pages={pages} />
            <h1 className=" bg-blue-200 text-4xl font-bold text-center mb-8">Contact Us</h1>
            <div className="max-w-md mx-auto">
                <input
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-indigo-500"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-indigo-500"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="block w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Contact;
