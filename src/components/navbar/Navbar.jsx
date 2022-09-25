import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar"
         role="navigation">
      <div className="nav-wrapper">
        <a href="#"
           id="logo-container">
          Rusandorx
        </a>
        <ul className="navbar-links">
          <div className="link-wrapper"><a href="#">Home</a></div>
          <div className="link-wrapper"><a href="#skills-section">Skills</a></div>
          <div className="link-wrapper"><a href="#projects-section">Projects</a></div>
        </ul>
      </div>
    </nav>
  )
}