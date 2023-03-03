import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";

import Typewriter from 'typewriter-effect';
import TrackVisibility from 'react-on-screen';

import headerImg from "../assets/img/logo.png";

function Home() {
    return (
        <><><>
            {/*Apropos*/}
            <section className="home" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>

                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h1>{`LightMapL`}<Typewriter options={{ strings: ['parcours', 'Concepteur', 'Partage'], autoStart: true, loop: true, }} /></h1>

                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={headerImg} alt="Header Img" />
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

            {/*Caarousel */}
            <section className="carra">
                <Carousel className="carrousel">
                    <Carousel.Item>
                        <img
                            className="carimage"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Illuminons vos parcours.Avec l'application LightMap, Concevez simplement vos AFEST et concentrez vous sur l’essentiel.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carimage"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carimage"/>

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </><>
                {/*Formulaire*/}
                <section className="forms">
                    <Form className="form">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="name" placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </section>
            </></>

    );
}

export default Home;