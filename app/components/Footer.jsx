import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

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
    label: 'Instagram',
  },
  // {
  //   href: 'mailto:premvishwakarma088@gmail.com',
  //   icon: <FaEnvelope />,
  //   label: 'Email',
  // },
];

const renderSocialIcons = () =>
  socialLinks.map(({ href, icon, label }) => (
    <Link
      key={label}
      href={href}
      target="_blank"
      aria-label={label}
      className="text-white text-lg transition hover:text-[#A594FD]"
    >
      {icon}
    </Link>
  ));

function Footer() {
  return (
    <footer
      id="footer"
      className="container border-t border-gray-600 py-4 md:py-[2rem] mx-auto my-8 md:my-16 lg:px-[12rem]"
    >
      <div className="grid items-center grid-cols-2 gap-4 justify-items-center md:grid-cols-4">
        <p className="text-[#A594fd] text-sm">Feel free to contact me</p>

        {/* ✅ Replace Telegram with phone number */}
        <p className="text-sm text-gray-400">+91 9589817903</p>

        {/* ✅ Replace email text with email icon link */}
        <a
          href="mailto:premvishwakarma088@gmail.com"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#A594FD] transition"
          aria-label="Email"
        >
          <span>Let's Connect:</span>
          <FaEnvelope className="text-base" />
        </a>

        {/* <p className="text-sm text-gray-400">Mail To:</p> */}

        {/* ✅ Social icons section */}
        <div className="flex items-center justify-center gap-4">
          {renderSocialIcons()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
