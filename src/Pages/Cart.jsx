import { Button, Col, Container, Image, InputGroup, Modal, Row, Table, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cartItemQuantityDecrement, cartItemQuantityIncrement, removeCartItem } from "../Redux/productSlice";
import { toast } from "react-toastify";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.productState);//to access redux store
    const dispatch = useDispatch();


    const handleRemoveFromCart = (productId) => {
        dispatch(removeCartItem(productId));
        toast.success("Removed from cart!");
    }

    const handleItemDecrement = (productId) => {
        dispatch(cartItemQuantityDecrement(productId))
    }
    const handleItemIncrement = (productId) => {
        dispatch(cartItemQuantityIncrement(productId))
    }

    const totalPrice = cartItems?.reduce((total, item) => {
        total += item.quantity * item.productprice;
        return total;
    }, 0);


    return (

        <Container className="mt-3">
            <Row>
                <Col className="d-flex justify-content-between">
                    <h4>Cart Products</h4>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>product image</th>
                                <th>product Name</th>
                                <th>product price</th>
                                <th>Qty</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        {i + 1}
                                    </td>

                                    <td>
                                        <Image className="thump-img" src={item?.productphoto ?? null} alt={item?.productname ?? " "} />
                                    </td>
                                    <td>
                                        {item?.productname ?? " "}
                                    </td>
                                    <td>
                                        {item?.productprice ?? 0}
                                    </td>
                                    <td>
                                        <InputGroup className="mb-3">
                                            <Button
                                                onClick={() => handleItemDecrement(item.id)}
                                                variant="outline-danger" id="button-addon1"
                                                disabled={item.quantity < 2 ? true : false}
                                            >
                                                -
                                            </Button>
                                            <Form.Control
                                                style={{ width: "50px", flex: "none" }}
                                                aria-label="Example text with button addon"
                                                aria-describedby="basic-addon1"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <Button
                                                onClick={() => handleItemIncrement(item.id)}
                                                variant="outline-success" id="button-addon1">
                                                +
                                            </Button>
                                        </InputGroup>

                                    </td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            <MdDeleteForever size={20} />
                                        </Button>

                                    </td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={6} className="text-end">
                                    <h4>total price:$ {totalPrice}</h4>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default Cart;