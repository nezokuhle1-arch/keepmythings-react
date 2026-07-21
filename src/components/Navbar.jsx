import keepLogo from '/public/Keep-logo.png';

function Navbar({ theme, onToggleTheme }) {
    return (
      <nav>
        <span className="material-symbols-outlined">menu</span>
        <img src={keepLogo} alt="Keep Logo" className="logo" />
        <h1>Keep</h1>
        <div className="search-group">
            <span className="material-symbols-outlined">search</span>
            <input type="search" placeholder="Search" />
        </div>
        <span className="material-symbols-outlined">refresh</span>
        <span className="material-symbols-outlined">view_agenda</span>
        <span className="material-symbols-outlined">settings</span>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <span className="material-symbols-outlined">apps</span>
      </nav>
    );
  }
  
  export default Navbar;