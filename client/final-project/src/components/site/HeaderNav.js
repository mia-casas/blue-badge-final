import {
        Navbar, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink,
        Button
    } from 'reactstrap';
    
    const Header = (props) => {
        return(
            <header>
                <Navbar className='header'>
                    <NavbarBrand href='/'>Lista Shopping List</NavbarBrand>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='https://github.com/mia-casas/blue-badge-final-client'>
                                GitHub
                            </NavLink>
                        </NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </Nav>
                </Navbar>
            </header>
        );
    };  
export default Header;