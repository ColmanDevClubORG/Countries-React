export const Header = () => {
    return (<div class="container flex flex-jc-sb flex-ai-c">
            <div class="logo">
              <a href="index.html">
                <h1>Where in the world?</h1>
              </a>
            </div>
            <button
              type="button"
              aria-label="Theme Switcher Button"
              class="theme-toggle flex flex-jc-sb flex-ai-c"
            >
              <i class="fa-regular fa-moon theme-icon"></i>
              <span class="theme-text">Dark Mode</span>
            </button>
          </div>)
    }

    
    export default Header;