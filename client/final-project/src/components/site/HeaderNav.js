import {
        Navbar, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink
    } from 'reactstrap';
    
    const Header = () => {
        return(
            <header>
                <Navbar className='header'>
                    <NavbarBrand href='/'>VERDE LIST</NavbarBrand>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='https://github.com/mia-casas/blue-badge-final-client'>
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
        );
    };  
export default Header;