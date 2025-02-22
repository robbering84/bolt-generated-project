import { Outlet, Link } from "react-router-dom";
    import { useState } from 'react';
    import { BsSun, BsMoon } from 'react-icons/bs';

    function App() {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <div className={`App ${theme}`}>
          <h1>LexicalLeap</h1>
          <nav>
            <ul>
              <li>
                <Link to="/words">Words</Link>
              </li>
              <li>
                <Link to="/words/new">Add Word</Link>
              </li>
              <li>
                <Link to="/import">Import Words</Link>
              </li>
              <li>
                <Link to="/review">Review</Link>
              </li>
              <li>
                <Link to="/flashcards">Flashcards</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === 'light' ? (
                    <>
                      <BsMoon /> Dark Mode
                    </>
                  ) : (
                    <>
                      <BsSun /> Light Mode
                    </>
                  )}
                </button>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      );
    }

    export default App
