import { Container, Row, Col, Image } from 'react-bootstrap';

function StoreListing() {
    return (
        <Container style={{ marginTop: '40px', textAlign: 'center' }}>
            <Row style={{ borderBottom: '1px solid #E8E9EB', display: 'flex', justifyContent: 'space-evenly' }}>
                <Row>
                    <Col xs=".5">
                        <Image src="" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: 'bold' }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs=".5">
                        <Image src="sprouts.webp" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: 'bold' }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs=".5">
                        <Image src="" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: 'bold' }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

export default StoreListing;
