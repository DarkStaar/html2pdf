import { SocialIcon } from 'react-social-icons';

const Footer = ({classN}) =>
<div className={classN ? `${classN}`: 'footer'} >
    <div className='footer-inner'>
        <img className="footer-logo" src='logo.png'/>

        <p className='footer-text'>HTML2PDF is an online document converter</p>
        <div className='footer-socials'>
            <SocialIcon url="https://facebook.com" className='footer-social' fgColor='black' bgColor='transparent'/>
            <SocialIcon url="https://instagram.com" className='footer-social' fgColor='black' bgColor='transparent'/>
            <SocialIcon url="https://linkedin.com" className='footer-social' fgColor='black' bgColor='transparent'/>
            <SocialIcon url="https://twitter.com" className='footer-social' fgColor='black' bgColor='transparent'/>
            <SocialIcon url="https://youtube.com" className='footer-social' fgColor='black' bgColor='transparent'/>
        </div>
        <div className='footer-copyright'>
        <p>© 2012-2020 Lilly021</p>
        <p>All rights reserved.</p>
        </div>
    </div>
</div>

export default Footer;