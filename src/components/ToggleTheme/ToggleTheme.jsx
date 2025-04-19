import { useState } from "react"
import UseLocalStorage from "./UseLocalStorage"
import './theme.css'

export default function ToggleTheme(){
    const [theme,setTheme]=UseLocalStorage('theme','dark')

    function handleToggleTheme(){
        setTheme(theme==='light' ? 'dark':'light')
    }
    console.log(theme)
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <p>hello World</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    )
}