import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
// import Logo from './img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
      </div>
      <div className="center">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="right">
        <AccountCircleOutlinedIcon />
        <SettingsOutlinedIcon />
      </div>
    </div>
  )
}

export default Navbar
