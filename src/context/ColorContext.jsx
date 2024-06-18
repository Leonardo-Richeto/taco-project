import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/themes'
import GlobalStyle from '../styles/global'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { createContext, useState, useEffect } from 'react'

export const ColorContext = createContext()

export function ColorProvider({ children }){
    const userTheme = localStorage.getItem("@infonutri:colorTheme")

    const [colorTheme, setColorTheme] = useState(userTheme ? userTheme : 'dark')
    const [theme, setTheme] = useState(colorTheme === 'light' ? lightTheme : darkTheme)
    
    useEffect(() => {
        setTheme(colorTheme === 'light' ? lightTheme : darkTheme);
    },[colorTheme])

    return(
        <ThemeProvider theme={theme}>
            <ColorContext.Provider value={{colorTheme, setColorTheme}}>
                <GlobalStyle />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover
                        theme={colorTheme === 'dark' ? 'light' : 'dark'}
                    />

                    { children }
            </ColorContext.Provider>
        </ThemeProvider>
    )
}