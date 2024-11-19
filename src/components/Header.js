import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import UIClogo from '../assets/images/UICLOGOIMAGE.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const navItems = ["HOME", "ABOUT", "PARTNERS"];
  const navigate = useNavigate();

  // State for language toggling
  const { language, setLanguage } = useLanguage();

  const handleRegisterClick = () => {
    navigate('/nextgen-event/register-form');
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(lang => lang === 'en' ? 'ar' : 'en');
  };

  return (
    <header>
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between xl:px-0 px-7 relative z-10">

        {/* Logo */}
        <Link to="https://utrechtitconsulting.com" className="cursor-pointer py-7 pr-7">
          <img src={UIClogo} className="w-[100px] md:w-[130px]" alt="UIC Logo" />
        </Link>

        {/* Navigation Links */}
        <div className='w-full flex justify-end items-center'>
          <ul className={`hidden sm:flex gap-5 font-mullish text-white items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="font-semibold py-7 hover:text-[#928f96] cursor-pointer transition-all duration-200 relative group"
              >
                <a className="text-sm font-mullish font-thin" href={`#${item.toLowerCase()}`}>{language === 'en' ? item : (item === 'HOME' ? 'الرئيسية' : item === 'ABOUT' ? 'عنا' : 'شركاء')}</a>
                <div className="absolute bottom-5 w-full h-1 bg-[#928f96] hidden group-hover:block transition-all duration-200"></div>
              </li>
            ))}
            <button
              onClick={handleRegisterClick}
              className="py-2 px-4 bg-blue-500 text-white font-thin rounded hover:bg-blue-700 transition-all duration-200"
            >
              {language === 'en' ? 'REGISTER' : 'تسجيل'}
            </button>
          </ul>

          {/* Responsive Menu Icon */}
          <div className="sm:hidden block">
            <FontAwesomeIcon icon={faBars} className="text-[30px] text-white" />
          </div>

          {/* Language Toggle Button */}
          <button onClick={toggleLanguage} className="ml-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-all duration-200">
            {language === 'en' ? 'ARABIC' : 'ENGLISH'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
