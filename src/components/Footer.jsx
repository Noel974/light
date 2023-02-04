import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
    return (
        <section className="homme" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Light Map</h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <p>image</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}