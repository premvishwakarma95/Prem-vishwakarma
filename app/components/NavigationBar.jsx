'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = id => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after clicking
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/premvishwakarma95/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/premvishwakarma95',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.instagram.com/_prem_088/',
      icon: <FaInstagram />,
      label: 'Facebook',
    },
  ];

  const renderLinks = () =>
    navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="font-semibold text-sm 
        transition cursor-pointer 
        hover:text-[#A594FD]"
        onClick={() => handleLinkClick(id)}
      >
        {label}
      </li>
    ));

  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        className="text-white transition 
        hover:text-[#A594FD]"
      >
        {icon}
      </Link>
    ));

  return (
    <nav
      className="container z-20 flex items-center justify-between p-4 mx-auto text-white md:pt-8 md:justify-around"
    >
      {/* Logo */}
      {/* <h1 className="z-30 text-xl font-bold text-white transition-transform duration-300 cursor-pointer hover:-rotate-6">
        MyPortfolio
      </h1> */}
      <img src='/logo.svg' alt='' />

      {/* Desktop Links */}
      <div className="items-center hidden gap-6 md:flex">
        <ul className="flex items-center gap-6">{renderLinks()}</ul>
      </div>

      {/* Social Links */}
      <div className="items-center hidden gap-4 md:flex">
        {renderSocialIcons()}
      </div>

      {/* Mobile Menu */}
      <button className="z-30 md:hidden" onClick={handleMenuToggle}>
        {isOpen ? <X /> : <MenuIcon />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute md:hidden bg-[#0F1724] z-10 left-0 top-[58px] w-full p-4 transition-all duration-500 ease-in-out ${isOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-[200%] opacity-0'
          }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {renderLinks(true)}
        </ul>
        <div className="flex items-center justify-center gap-4 mt-6">
          {renderSocialIcons()}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
