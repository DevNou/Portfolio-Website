

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/DevNou' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/arsenios-chatziantoniou-4a081022b/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/arsenis_xatzi/' },
]


const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {

                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;