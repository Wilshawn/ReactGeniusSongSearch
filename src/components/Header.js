import logo from '../assets/genius-logo.png'
import '../stylesheets/header.css'

const Header = () => {
  return (
    <header>
        <div>
            <img src={logo} alt="genius logo" />
        </div>
        <div>Song Search</div>
    </header>
  )
}

export default Header