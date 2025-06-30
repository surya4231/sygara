import NavbarComponent from "../../components/Customer/NavbarComponent";
import FooterComponent from "../../components/Customer/FooterComponent";

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import imgEmptyCart from '../../assets/img-empty-cart.png';
import imgProduct from '../../assets/img-semangka.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
    // fungsi jika keranjang kosong
    const [isCartEmpty, setIsCartEmpty] = useState(false);

    const [jumlah, setJumlah] = useState(1);
    const handleJumlahChange = (e) => {
        setJumlah(e.target.value);
    }
    const handleRemoveItem = () => {
        setIsCartEmpty(true);
    }
    const handleBuyClick =() => {
        window.location.href = '/order'
    }

    return (
        <>
            <NavbarComponent isLoggedIn={true} />

            <section className="cart">
                <Container>
                    <h2 className="text-success mb-3">Keranjang Belanja</h2>

                    {isCartEmpty ? (
                        <div className="text-center mt-5 mb-5">
                            <h4>Keranjang masih kosong :(, <Link to="/product" className="text-success">Ayo Belanja Sekarang!</Link></h4>
                            <img src={imgEmptyCart} alt="" width="50%" />
                            <FooterComponent />
                        </div>
                    ) : (
                        <Row>
                            <Col lg={6}>
                                <Card className="mb-3 rounded-5">
                                    <Row>
                                        <Col md={4}>
                                            <img src={imgProduct} alt="" className="img-fluid rounded-5 border" />

                                        </Col>

                                        <Col md={8}>
                                            <Card.Body className="p-4">
                                                <Row>
                                                    <Col>
                                                        <h5 className="card-title">Semangka</h5>
                                                    </Col>

                                                    <Col className="d-flex justify-content-end">
                                                        <h5 className="text-success"> Rp. 15.000</h5>
                                                    </Col>

                                                </Row>

                                                <Row>
                                                    <Col lg={8}>
                                                        <Form className="w-100 mt-3">
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Jumlah/kg</Form.Label>
                                                                <Form.Control type="number" max={10} min={1} onChange={handleJumlahChange} value={jumlah}></Form.Control>

                                                            </Form.Group>

                                                        </Form>
                                                    </Col>
                                                    <Col lg={4} className="d-flex justify-conten-end p-3">
                                                        <Button variant="outline-danger" onClick={handleRemoveItem}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col lg={6}>
                            <Card className="mb-3 rounded-5">
                                <Card.Body className="p-4">
                                    <h3>Ringkasan Belanja</h3>
                                    <h6>Berat Total</h6>
                                    <h6>sub total : Rp 15.000</h6>
                                    <Button variant="success" className="w-100 mt-3 rounded-5" onClick={handleBuyClick}>Beli</Button>
                                </Card.Body>
                            </Card>
                            </Col>

                        </Row>
                    )}
                </Container>
            </section>
            <FooterComponent/>

            
        </>
    );
}

export default CartPage;