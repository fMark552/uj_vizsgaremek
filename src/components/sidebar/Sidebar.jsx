import './Sidebar.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

const Sidebar = () => {
  return (
    <div>
      <div className="container sidebar">
        <div className="menu">
          <h3>Friend list</h3>
          <hr />
          <div className="item">
            <p>User1</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>User2</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>User3</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>User4</p>
            <button>Unfollow</button>
          </div>
          <div className="item">
            <p>User5</p>
            <button>Unfollow</button>
          </div>
          <button>See all friends</button>
          <h3>Your stats</h3>
          <hr />
          <div className="stats">
            <div>
              <FavoriteBorderOutlinedIcon />
              <p>39</p>
            </div>
            <div>
              <HeartBrokenOutlinedIcon />
              <p>15</p>
            </div>
            <div>
              <TextsmsOutlinedIcon />
              <p>58</p>
            </div>
            <div>
              <PersonAddAltOutlinedIcon />
              <p>23</p>
            </div>
            <div>
              <CreateOutlinedIcon />
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
