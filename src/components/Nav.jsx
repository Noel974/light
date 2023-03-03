import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.png'
    ;
function Navi () {
    return (
        <Navbar bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="/"><img className="logo" src={Logo} alt="Logo Light Map" /></Navbar.Brand>
                <Nav className='mb-2 mb-lg-0'>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Dashboard">Connection</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default Navi;
