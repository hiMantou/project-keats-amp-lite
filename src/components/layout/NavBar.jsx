
import Logo from '@/components/icon/logo';
import { Button } from '@/components';

const NavBar = ({ current }) => {
    return (
        <div className="topBar">
            <div className="wideContainer">
                <Logo/>
            </div>
        </div>
    )
}

export default NavBar;
