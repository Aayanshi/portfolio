
import logo from "../assets/aainaLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-3" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/aayanshi-sharma" target="_blank" rel="noopener noreferrer" >
                <FaLinkedin />
                </a>
                
                <a href="https://github.com/Aayanshi/JS-projects" target="_blank" rel="noopener noreferrer" >
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/_curly_aaina/" target="_blank" rel="noopener noreferrer" >
                <FaInstagram />
                </a>
                
                <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" >
                <FaSquareXTwitter />
                </a>
                
                

            </div>
        </nav>
    );
};

export default Navbar;



{/* <div style={styles.container}>
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
  <FaFacebook size={40} />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
  <FaTwitter size={40} />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
  <FaInstagram size={40} />
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
  <FaLinkedin size={40} />
</a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer" >
</a>
</div>
);
}; */}
