import { useContext } from 'react'
import './Home.scss'
import Posts from '../../components/posts/Posts.jsx'

const Home = () => {
  return (
    <div>
      <h1>Your feed</h1>
      <Posts />
    </div>
  )
}

export default Home
