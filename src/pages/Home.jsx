import { Carousel, Container, Row, Col } from 'react-bootstrap';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCheckbox,
    MDBInput,
    MDBBtn,
    MDBTextArea,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
} from 'mdb-react-ui-kit';
import Typewriter from 'typewriter-effect';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/logo.png";

function Home() {
    return (
        <><><>
            {/*Banner*/}
            <section className="home" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>

                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h1>{`LightMap`}<div className="whrite"><Typewriter options={{ strings: ['Parcours', 'Concepteur', 'Partage'], autoStart: true, loop: true, }} /></div></h1>

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
            {/*Propos*/}
            <section className="propos">
                <MDBCard alignment='center'>
                    <MDBCardHeader>A propos</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Améliorer ses compétences au rythme du changement et grandir aujourd'hui</MDBCardTitle>
                        <MDBCardText>Illuminons vos parcours.Avec l'application LightMap,
                            Concevez simplement vos AFEST et concentrez vous sur l’essentiel.</MDBCardText>
                        <MDBCardText>Aidez vos équipes techniques à garder une longueur d'avance.</MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </section>

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
                <MDBContainer fluid className='mt-5'>
                    <section className='text-center'>
                        <div className='p-5image'></div>

                        <div
                            className='card mx-4 mx-md-5 shadow-5-strong'
                            style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}
                        >
                            <div className='card-body py-5 px-md-5'>
                                <MDBRow className='mb-5'>
                                    <MDBCol lg='3' md='6' className='mb-5 mb-lg-0 position-relative'>
                                        <MDBIcon icon='globe-americas' size='3x' className='text-primary mb-4' />
                                        <h6 className='fw-normal mb-0'>Unites States</h6>
                                        <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
                                    </MDBCol>

                                    <MDBCol lg='3' md='6' className='mb-5 mb-lg-0 position-relative'>
                                        <MDBIcon icon='map-marker-alt' size='3x' className='text-primary mb-4' />
                                        <h6 className='fw-normal mb-0'>New York, 94126</h6>
                                        <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
                                    </MDBCol>

                                    <MDBCol lg='3' md='6' className='mb-4 mb-lg-0 position-relative'>
                                        <MDBIcon icon='phone' size='3x' className='text-primary mb-4' />
                                        <h6 className='fw-normal mb-0'>+ 01 234 567 89</h6>
                                        <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
                                    </MDBCol>

                                    <MDBCol lg='3' md='6' className='mb-4 mb-lg-0 position-relative'>
                                        <MDBIcon icon='hand-holding-usd' size='3x' className='text-primary mb-4' />
                                        <h6 className='fw-normal mb-0'>Tax ID: 273 384</h6>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow class='d-flex justify-content-center'>
                                    <MDBCol lg='6' class='col-lg-6'>
                                        <form>
                                            <MDBInput className='mb-4' id='password2' label='Name' />
                                            <MDBInput className='mb-4' type='email' id='email2' label='Email address' />
                                            <MDBTextArea label='Message' rows={4} className='mb-4' />

                                            <MDBRow className='mb-4 justify-content-center'>
                                                <MDBCol md='6' className='d-flex justify-content-center'>
                                                    <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Send me a copy of this message' />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBBtn type='submit' block className='mb-4'>
                                                Send
                                            </MDBBtn>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </div>
                        </div>
                    </section>
                </MDBContainer>
            </></>

    );
}

export default Home;