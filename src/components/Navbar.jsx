import keepLogo from '/public/Keep-logo.png';

function Navbar() {
    return (
      <nav>
        <span className="material-symbols-outlined">menu</span>
        <img src={keepLogo} alt="Keep Logo" className="logo" />
        <h1>Keep</h1>
        <span className="material-symbols-outlined">search</span>
        <input type="search" placeholder="Search" />
        <span className="material-symbols-outlined">refresh</span>
        <span className="material-symbols-outlined">view_agenda</span>
        <span className="material-symbols-outlined">settings</span>
        <span className="material-symbols-outlined">apps</span>
      </nav>
    );
  }
  
  export default Navbar;