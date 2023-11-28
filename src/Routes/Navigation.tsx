import { BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
import { Route, Routes, Link } from 'react-router-dom';
import { routes } from './routes';
import { Suspense } from 'react';




function Navigation() {
    return (
        <>
        <Suspense fallback={<span>Cargando...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo" />
                        <ul>
                            {
                                routes.map(route =>(
                                    <li key={ route.to}> <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink > </li>
                                ))
                            }
                            
                        
                    </ul>
                    </nav>

                    <Routes>

                        {
                            routes.map( route => (
                                <Route key={route.to} path={route.path} element={<route.Component/>}/>
                            ))
                        }
                        
                        <Route path='/*' element={ <Navigate to={ routes[0].to } replace />  }/>
                    </Routes>
                   
                </div>

            </BrowserRouter>
            </Suspense>
        </>
    )
}

export { Navigation }