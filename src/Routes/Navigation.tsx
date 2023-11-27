import { BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
import { Route, Routes, Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo" />
                        <ul>
                            
                        <li> <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink > </li>
                        <li> <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink > </li>
                        <li> <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>User</NavLink > </li>
                    </ul>
                    </nav>

                    <Routes>
                        <Route path='/' element={<h1>Home</h1>}/>
                        <Route path='/about' element={<h1>About</h1>}/>
                        <Route path='/users' element={<h1>Users</h1>}/>
                        <Route path='/*' element={ <Navigate to={'/home'} replace />  }/>
                    </Routes>
                   
                </div>

            </BrowserRouter>

        </>
    )
}

export { Navigation }