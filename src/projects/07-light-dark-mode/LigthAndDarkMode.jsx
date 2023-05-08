import React, {useEffect, useState} from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context';

export default function LigthAndDarkMode() {

    const [theme, setTheme] = useState(themes.dark);

    function changeTheme() {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    }

    useEffect(() => {  // Only re-run when variables have been updated.
        let docBody = document.body;
        switch(theme) {
            case themes.light:
                docBody.classList.remove('bg-dark');
                docBody.classList.remove('text-light');
                docBody.classList.add('bg-light');
                docBody.classList.add('text-dark');
                break;
            case themes.dark:
                docBody.classList.remove('bg-light');
                docBody.classList.remove('text-dark');
                docBody.classList.add('bg-dark');
                docBody.classList.add('text-light');
                break;
        }
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Blog />
    </ThemeContext.Provider>
  )
}
