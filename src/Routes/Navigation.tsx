import { BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
import { Route, Routes, Link } from 'react-router-dom';
import { LazyPage1 } from '../pages/LazyPage1';
import { LazyPage2 } from '../pages/LazyPage2';
import { LazyPage3 } from '../pages/LazyPage3';
import { LazyPage4 } from '../pages/LazyPage4';

function Navigation() {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo" />
                        <ul>
                            
                        <li> <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>lazy1</NavLink > </li>
                        <li> <NavLink to="//lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>lazy2</NavLink > </li>
                        <li> <NavLink to="//lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>lazy3</NavLink > </li>
                        <li> <NavLink to="//lazy4" className={({ isActive }) => isActive ? 'nav-active' : ''}>lazy4</NavLink > </li>
                    </ul>
                    </nav>

                    <Routes>
                        <Route path='/lazy1' element={<LazyPage1 />}/>
                        <Route path='/lazy2' element={<LazyPage2 />}/>
                        <Route path='/lazy3' element={<LazyPage3 />}/>
                        <Route path='/lazy4' element={<LazyPage4/>}/>
                        <Route path='/*' element={ <Navigate to="/lazy1" replace />  }/>
                    </Routes>
                   
                </div>

            </BrowserRouter>

        </>
    )
}

export { Navigation }