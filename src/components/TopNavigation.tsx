import React, { useState } from 'react';

const TopNavigation: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
   
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
    
  };

  return (
    <div className="bg-gray-900 text-white p-2 flex justify-between items-center"> 
      <div className="flex items-center space-x-4">
        <div>
          <select id="language" value={language} onChange={handleLanguageChange} className="text-black">
            <option value="English">English</option>
            <option value="Spanish">French</option>
            <option value="French">Germen</option>
            
          </select>
        </div>
        <div>
          <select id="currency" value={currency} onChange={handleCurrencyChange}className='text-black'>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>

          </select>
          <span><span>  Call Us 03005400  </span> </span>
        </div>
      </div>
      
      <div>
        
    <span>Free Delivery Over 200 </span>
      </div>
    </div>
  );
}

export default TopNavigation;
