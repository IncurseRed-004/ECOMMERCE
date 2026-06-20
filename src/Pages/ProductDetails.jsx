import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../Redux/productSlice";
import { toast } from "react-toastify";

function ProductDetails({ setCartItems, cartItems }) {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productState);
    const { id } = useParams()

    const singleProduct = products.find(
        (product) => product.id === Number(id)
    )

    const handleAddToCart = () => {
        dispatch(addCartItem(singleProduct));
        toast.success(`${singleProduct.productname} added to cart!`);
    }


    return (
        <div>
            <Container>
                <Card className="border-0">
                    {singleProduct ? (
                        <Row>
                            <Col md={5}>
                                <Card.Img
                                    src={singleProduct?.productphoto ?? null}
                                    style={{
                                        height: "450px",
                                        objectFit: "cover"
                                    }}
                                />
                            </Col>


                            <Col md={7}>
                                <Card.Body>
                                    <h2>{singleProduct?.productname ?? ""}</h2>

                                    <p>
                                        {singleProduct?.productdescription ?? ""}
                                    </p>

                                    <h3>
                                        ${singleProduct?.productprice ?? ""}
                                    </h3>


                                    <Button variant="dark"
                                        onClick={handleAddToCart}
                                    >
                                        add to cart
                                    </Button>


                                </Card.Body>
                            </Col>

                        </Row>
                    ) : (
                        <Row>
                            <Col className="text-center">
                                <h4>Product not found !!!</h4>
                            </Col>
                        </Row>

                    )}



                </Card>

            </Container>

        </div>
    )
}
export default ProductDetails;