import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="main-navbar">
            <div className="nav-container">
                <NavLink to="/" className="brand-logo">
                    <span className="logo-icon">📚</span>
                    Seuss Treasury
                </NavLink>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <span className="nav-icon">📖</span>
                            Book Collection
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/quotes" className="nav-link">
                            <span className="nav-icon">💫</span>
                            Inspirational Quotes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}