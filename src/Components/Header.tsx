/* Header.tsx */
import './Header.css'
import { Link } from 'react-router-dom';

interface HeaderProps {
    title: string;
    description: string;
    logo: string;
}

const Header = ({ title, description, logo }: HeaderProps) => {
    return (
        <header className='header'>
            <div className='header-container'>
                <Link to="/" className="header-home-link">
                    <img src={logo} alt="School Logo" className="header-logo" />
                    
                    <div className='header-text'>
                        <h1 className='header-title'>{title}</h1>
                        <p className='header-description'>{description}</p>
                    </div>
                </Link>

                <nav className="nav-menu">
                    <Link to="/list">View Students</Link>
                    <Link to="/add">Add New Student</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;