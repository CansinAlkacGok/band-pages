import { NavLink, Outlet } from 'react-router-dom';


export default function Home() {

    const styleLink = ({isActive}) => {
        return {color: isActive ? "blue" : "black"}
    }

    return (
        <div>
            <header>
                <h1><NavLink to="/" style={styleLink}>MaNga</NavLink></h1>
                
             
                <nav>
                    <NavLink to="/vocals" style={styleLink}>Vocals</NavLink> 
                    <NavLink to="/guitar" style={styleLink}>Guitar</NavLink> 
                    <NavLink to="/bass" style={styleLink}>Bass</NavLink> 
                    <NavLink to="/drums" style={styleLink}>Drums</NavLink>
                </nav>
                <Outlet />
            </header>
            
        </div>

    )
}