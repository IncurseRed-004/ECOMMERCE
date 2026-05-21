import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ProductDetails({products}){

    const {id}= useParams()

    const singleProduct= products.find(
        (product) => product.id === Number(id)
    )




    return(
        <div>
            <Container>
            <Card className="border-0">

                <Row>
                    <Col md={5}>
                    <Card.Img
                        src={singleProduct.image}
                        style={{
                            height:"450px",
                            objectFit:"cover"
                        }}
                        />
                    </Col>


                    <Col md={7}>
                        <Card.Body>
                            <h2>{singleProduct.name}</h2>

                            <p>
                                {singleProduct.description}
                            </p>

                            <h3>
                                ${singleProduct.price}
                            </h3>

                            <Button variant="dark"
                                
                            >
                                add to cart
                            </Button>
                        </Card.Body>
                    </Col>

                </Row>


            </Card>

            </Container>

        </div>
    )
}
export default ProductDetails;