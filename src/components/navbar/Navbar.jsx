import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Logo from './logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <HomeOutlinedIcon />
        <AccountCircleOutlinedIcon />
        <SettingsOutlinedIcon />
      </div>
      <div className="center">
        <div className="logo">
          <img src={Logo} alt="logo" width="40px" />
        </div>
      </div>
      <div className="right">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar
