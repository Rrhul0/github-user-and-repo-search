import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import User from './User'
import Page404 from './page404'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='search' element={<Search />} />
            <Route path='user/:username' element={<User />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default App
