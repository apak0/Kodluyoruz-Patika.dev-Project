import {useTheme} from '../context/ThemeContext'

function Button({children}) {
    const {theme, setTheme} = useTheme();

   

  return (
    <div>
        Active Theme: {theme}    

        <button onClick={ () => setTheme(theme === "light" ? "dark" : "light")} >Change Theme</button>
    </div>
  )
}

export default Button