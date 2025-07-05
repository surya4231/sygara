import NavbarComponent from "../../components/Customer/NavbarComponent";
import FooterComponent from "../../components/Customer/FooterComponent";
import { Container, Row, Col, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

import imgSuccess from "../../assets/img-success.png";
import imgBca from "../../assets/ic-bca.png";





const SuccessPage = () => {
    return (
        <>
            <NavbarComponent isLoggedIn={true} />

            <section className="success">
                <Container>
                    <div className="text-center mt-5 mb-5">
                        <h2 className="text-success">Terima Kasih atas pesanan Anda!</h2>
                        <p>Pesanan akan segera diantarkan ke Alamat Anda, pastikan nomor telepon aktif agar kurir <br /> dapat lebih mudah mengantar pesanan</p>
                    </div>
                    <Row className="d-flex justify-content-center">
                        <Col lg={6} className="text-center">
                            <Card className="mb-3">
                                <Row> {/* gunakan Row di dalam Card */}
                                    <Col md={4}>
                                        <img src={imgBca} alt="Bank BCA" className="img-fluid h-100 w-100 object-fit-cover rounded-0" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body className="p-4 h-100 d-flex flex-column justify-content-center">
                                            <Card.Title>Pembayaran Via Transfer ke Bank BCA</Card.Title>
                                            <Card.Text>
                                                Nomor Rekening : 612009820028 (a.n Sygara)<br />
                                                Total Pembayaran : Rp 25.000
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                            <Link to="/" className="btn btn-success w-100">Kembali Ke Beranda</Link>
                            <img src={imgSuccess} alt="" width="100%" />

                        </Col>
                    </Row>


                </Container>
            </section>

            <FooterComponent />
        </>
    );
}

export default SuccessPage;