import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import ProjectDropdown from '../ProjectDropdown';
import GalleryDropdown from '../GalleryDropdown';

const Navbar = () => {
  const linkStyle = {
    marginRight: '20px', 
    textDecoration: 'none', 
  };
  const navbarStyle='text-base text-white uppercase'
const navItem = 'hover:rounded-tl-full hover:bg-green-400 hover:rounded-br-full p-4'
  return (
    <div className='bg-blue-400 px-2 py-4 !z-100 sticky top-0' style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center' }}>
      <div>
        <img src={Logo} alt="sun"/>
      </div>
      <div className={`flex ${navbarStyle}`}>
      <Link to="/" style={linkStyle}><h1 className={navItem}>Home</h1></Link>
      <Link to="/aboutus" style={linkStyle}><h1 className={navItem}>About us</h1></Link>
      <Link to="/projects" style={linkStyle}>
      <ProjectDropdown/>
      </Link>
      <Link to="/gallery" style={linkStyle}><h1><GalleryDropdown/></h1></Link>
      <Link to="/awards" style={linkStyle}><h1 className={navItem}>Awards</h1></Link>
      <Link to="/csr" style={linkStyle}><h1 className={navItem}>CSR</h1></Link>
      <Link to="/contact" style={linkStyle}><h1 className={navItem}>Contact us</h1></Link>
      <Link to="/forms" style={linkStyle}><h1 className={navItem}>Forms</h1></Link>
      <Link to="/careers" style={linkStyle}><h1 className={navItem}>Careers</h1></Link>
      <Link to="/assosciate" style={linkStyle}><h1 className={navItem}>Assosciate login</h1></Link>
      </div>
    </div>
  );
};

export default Navbar;
