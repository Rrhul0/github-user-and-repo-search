import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import NoUser from './NoUser'
import User from './User'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='search' element={<Search />} />
            <Route path='user/:userid' element={<User />} />
            <Route path='user' element={<NoUser />} />
        </Routes>
    )
}

export default App
