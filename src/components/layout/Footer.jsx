import {
    ToTop as IconToTop,
} from '@icon-park/react';

import Logo from '@/components/icon/logo';
import { Button } from '@/components';

const Footer = () => {
    return (
        <div id="footer">
            <div className="main">
                <div className="container">
                    <div className="followLeft">
                        <Logo className="color" />
                    </div>
                    <div className="linkRight">
                        Fllow us
                        <div className="iconList">
                            <a href="#" className="icon">
                                <img src="./images/media/facebook.svg" />
                            </a>
                            <a href="#" className="icon">
                                <img src="./images/media/twitterx.svg" />
                            </a>
                            <a href="#" className="icon">
                                <img src="./images/media/instagram.svg" />
                            </a>
                            <a href="#" className="icon">
                                <img src="./images/media/youtube.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    Copyright © 2025 Sojourn Abroad All Rights Reserved
                </div>
            </div>
            <Button id="backToTop" type="icon">
                <IconToTop />
            </Button>
        </div>
    )
}

export default Footer;