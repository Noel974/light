import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

function TextLinkExample() {
    return (
       <><Navbar>
            <Container>
                <Nav>
                    <Navbar.Brand href="#home">LIGHTMAP</Navbar.Brand>
                </Nav>

                <Nav className="md-3">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            <Container className="mb-3">
                <div
                    className="modal show">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>LIghtMap<Modal.Title>
                            </Modal.Header>

                                <Modal.Body>
                                    <p>Modal body text goes here.</p>
                                </Modal.Body>
                            </Modal.Dialog>
                            </Container></>
                        );
}

                        export default TextLinkExample;
                </div>
                