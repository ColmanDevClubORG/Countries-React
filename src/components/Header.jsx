function Header() {
  return (
    <header className="header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <a href="index.html">
            <h1>Where in the world?</h1>
          </a>
        </div>
        <button
          type="button"
          aria-label="Theme Switcher Button"
          className="theme-toggle flex flex-jc-sb flex-ai-c"
        >
          <i className="fa-regular fa-moon theme-icon"></i>
          <span className="theme-text">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
