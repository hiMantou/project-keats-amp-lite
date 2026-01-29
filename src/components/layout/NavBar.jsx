
import Logo from '@/components/icon/logo';
import { Button } from '@/components';

const NavBar = ({ current }) => {
    return (
        <div className="topBar" id="jsTopBar">
            <div className="wideContainer">
                <Logo/>
                <Button className="btnTop btn-link">Home</Button>
            </div>
        </div>
    )
}

export default NavBar;
