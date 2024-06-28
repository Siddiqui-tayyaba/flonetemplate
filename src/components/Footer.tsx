import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-500 p-8 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <h2 className="font-bold text-xl mb-4">Flone.</h2>
                    <p>&copy; 2024 Flone. All rights reserved.</p>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-4">About Us</h2>
                    <ul>
                        <li><a href="/about" className="hover:underline">Who we are</a></li>
                        <li><a href="/team" className="hover:underline">Our Team</a></li>
                        <li><a href="/careers" className="hover:underline">Careers</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-4">Useful Links</h2>
                    <ul>
                        <li><a href="/help" className="hover:underline">Help Center</a></li>
                        <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-4">Follow Us</h2>
                    <ul className="flex flex-col space-y-2">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-4">Subscribe</h2>
                    <form className="flex flex-col space-y-2">
                        <input 
                            type="email" 
                            placeholder="Your email" 
                            className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                            type="submit" 
                            className="p-2 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
