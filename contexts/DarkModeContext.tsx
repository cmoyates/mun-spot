import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext(null)

const DarkModeProvider: React.FC = ({children}) => {

    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            <div className={`${darkMode && "dark"} min-h-screen flex flex-col`}>
                {children}
            </div>
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider