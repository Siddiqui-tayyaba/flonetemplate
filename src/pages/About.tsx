import React from 'react';
import Header from '../components/LoginHeader';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
];

const AboutUs: React.FC = () => {
    return (
        <div>
            <Header pages={pages} />
            <div className="bg-blue-200 container mx-auto text-center py-12">
                <h1 className="text-4xl font-bold">Welcome To Flone</h1>
                <div className="mt-2 mb-8 w-24 h-1 bg-black mx-auto"></div>

                <p className="text-lg mb-12">
                Step into the realm of haute couture with Flone, 
                where every stitch tells a story of style and sophistication. 
                From runway-ready ensembles to everyday essentials, 
                Flone curates a collection that speaks to the fashion-forward individual in you. 
                Our curated selection of handpicked pieces ensures that you're not just buying clothes; 
                you're investing in timeless elegance and unparalleled craftsmanship. 
                Whether you're strutting down the streets or making a statement at a soirée, 
                Flone has everything you need to make heads turn and hearts skip a beat. 
                Welcome to the epitome of fashion -
                welcome to Flone, where every garment is a masterpiece waiting to be adorned.
                 </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
                        <p>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded shadow-md text-center">
                        <i className="fas fa-project-diagram text-4xl mb-4"></i>
                        <h3 className="text-xl font-bold">Projects Done</h3>
                        <p>123</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md text-center">
                        <i className="fas fa-coffee text-4xl mb-4"></i>
                        <h3 className="text-xl font-bold">Cups of Coffee</h3>
                        <p>456</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md text-center">
                        <i className="fas fa-bullhorn text-4xl mb-4"></i>
                        <h3 className="text-xl font-bold">Branding</h3>
                        <p>789</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md text-center">
                        <i className="fas fa-smile text-4xl mb-4"></i>
                        <h3 className="text-xl font-bold">Happy Clients</h3>
                        <p>1011</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default AboutUs;
