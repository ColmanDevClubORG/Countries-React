export const Header = () => {
  return (
    <div className="container flex flex-jc-sb flex-ai-c">
      <div className="logo">
        <a href="/">
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
  );
};
export default Header;
