import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link></Link>
        </div>
    );
};

export default Header;