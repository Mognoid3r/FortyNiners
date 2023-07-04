// import React, { useState, useEffect } from 'react';

// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleResize = () => {
//     setIsDesktop(window.innerWidth > 768);
//   }

//   const handleScroll = () => {
//     setScrollPosition(window.pageYOffset);
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <nav className={`navbar ${isDesktop ? 'desktop' : 'mobile'} ${scrollPosition > 50 ? 'scrolled' : ''}`}>
//       <div className="logo">Logo</div>
//       {isDesktop ? (
//         <>
//           <ul className={`nav-links ${scrollPosition > 50 ? 'scrolled' : ''}`}>
//             <li><a href="#hero">Hero</a></li>
//             <li><a href="#plans">Plans</a></li>
//             <li><a href="#programs">Programs</a></li>
//             <li><a href="#why-us">Why Us</a></li>
//           </ul>
//           <a href="tel:123-456-7890" className={`call-now ${scrollPosition > 50 ? 'scrolled' : ''}`}>
//             {scrollPosition > 50 ? '@' : 'Call Now'}
//           </a>
//         </>
//       ) : (
//         <>
//           <div className="menu-icon" onClick={() => setIsOpen(true)}>|</div>
//         </>
//       )}
//       {isOpen && (
//         <div className="modal" onClick={() => setIsOpen(false)}>
//           <div className="modal-content">
//             <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
//             <ul className="nav-links">
//               <li><a href="#hero">Hero</a></li>
//               <li><a href="#plans">Plans</a></li>
//               <li><a href="#programs">Programs</a></li>
//               <li><a href="#why-us">Why Us</a></li>
//             </ul>
//             <a href="tel:123-456-7890" className="call-now">Call Now</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;







import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png'
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  }

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`navbar ${isDesktop ? 'desktop' : 'mobile'} ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className={`logo-n ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <img src={Logo} alt=""/>
      
      </div>
      {isDesktop ? (
        <>
          <ul className={`nav-links ${scrollPosition > 50 ? 'scrolled' : ''}`}>
            <li><Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>Hero</Link></li>
            <li><Link to="plans" spy={true} smooth={true} offset={-70} duration={500}>Plans</Link></li>
            <li><Link to="programs" spy={true} smooth={true} offset={-70} duration={500}>Programs</Link></li>
            <li><Link to="why-us" spy={true} smooth={true} offset={-70} duration={500}>Why Us</Link></li>
          </ul>
          <button class="btn">
          <a href="tel:520-906-1694" className={`call-now ${scrollPosition > 50 ? 'scrolled' : ''}`}>
            {scrollPosition > 50 ? 'Call Now' : 'Call Now'}
          </a>
          </button>
          
        </>
      ) : (
        <>
          <div className="menu-icon" onClick={() => setIsOpen(true)}>|</div>
        </>
      )}
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <ul className="nav-links">
              <li><Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>Hero</Link></li>
              <li><Link to="plans" spy={true} smooth={true} offset={-70} duration={500}>Plans</Link></li>
              <li><Link to="programs" spy={true} smooth={true} offset={-70} duration={500}>Programs</Link></li>
              <li><Link to="why-us" spy={true} smooth={true} offset={-70} duration={500}>Why Us</Link></li>
            </ul>
            <a href="tel:123-456-7890" className="call-now">Call Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
