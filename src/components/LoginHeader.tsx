import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
    pages: { name: string, path: string }[];
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
    const location = useLocation();

    return (
        <header className="bg-gray-800 p-4 text-white">
            <nav className="container mx-auto flex justify-center space-x-4">
                {pages.map((page) => (
                    <Link 
                        key={page.path}
                        to={page.path}
                        className={`font-bold text-xl ${location.pathname === page.path ? 'text-blue-500' : 'text-white'}`}
                    >
                        {page.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
