import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  NavbarToggler,
  Collapse
} from 'reactstrap';

import axios from 'axios';

import { useRouter } from 'next/router';

import { useContext } from 'react';
import AppContext from '../../lib/AppContext';

const BsNavLink = props => {
    const { href, title, className="" } = props;
    return (
      <Link href={href}>
        <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
      </Link>
    )
  }
  
  const BsNavBrand = () => 
  <Link href="/">
    <img className='header-logo' src="logo.png" alt="Logo" />
  </Link>

const LogInBtn = () => 
    <Button href="/login" color="success" className='loginbutton nav-link port-navbar-link'>
      Log In
    </Button>

const Header = () => 
{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const router = useRouter();

    return (
        <div className='header'>
            <Navbar
            className={`port-navbar port-default absolute header-rectangle`}
            expand="lg">
                <BsNavBrand />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} className="navbar-collapse" navbar color='blue'>
                <Nav className="ms-auto" navbar>
                    <NavItem className="port-navbar-item apitext">
                    <BsNavLink href="/" title="How to use API?"/>
                    </NavItem>
                    <NavItem className="port-navbar-item contact">
                    <BsNavLink href="/" title="Contact Us"/>
                    </NavItem>
                    { !isLoggedIn &&
                        <NavItem className="port-navbar-item">
                            <LogInBtn />
                        </NavItem>
                    }
                    {isLoggedIn &&
                      <NavItem className="port-navbar-item">
                          <button onClick={
                            async () => {
                              const token = localStorage.getItem('token');

                              const response = await axios.post('/api/v1/logout', {authToken: token});
                              console.log(response);
                              localStorage.clear();
                              setIsLoggedIn(false);
                              router.push('/');
                            }
                          } className='logoutbutton nav-link port-navbar-link'>SS</button>
                      </NavItem>
                    }
                </Nav>
              </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;