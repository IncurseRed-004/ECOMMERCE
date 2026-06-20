import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import "./ListProducts.css"
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteProduct } from "../Redux/productSlice";
import { toast } from "react-toastify";

const Listproducts = () => {
    const { products } = useSelector((state) => state.productState);//to access redux store
    const [show, setShow] = useState(false); //modal
    const [deleteProductIndex, setDeleteProductIndex] = useState(null);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = (productId) => {
        setDeleteProductIndex(productId)
        setShow(true);
    }

    const handleProductDelete = () => {
        dispatch(deleteProduct(deleteProductIndex));
        toast.success("product deleted!");
        setShow(false);
        setDeleteProductIndex(null);
    }
    return (

        <Container className="mt-3">
            <Row>
                <Col className="d-flex justify-content-between">
                    <h4>Listed Products</h4>
                    <Link className="btn btn-primary" to="/admin/add-product">Add products</Link>
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
                                <th>product description</th>
                                <th>edit</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, i) => (
                                <tr key={i}>
                                    <td>
                                        {i + 1}
                                    </td>

                                    <td>
                                        <Image className="thump-img" src={product?.productphoto ?? null} alt={product?.productname ?? " "} />
                                    </td>
                                    <td>
                                        {product?.productname ?? " "}
                                    </td>
                                    <td>
                                        {product?.productprice ?? 0}
                                    </td>
                                    <td>
                                        {product?.productdescription ?? ""}
                                    </td>
                                    <td>
                                        <Link to={`/admin/edit-product/${product.id}`}>
                                            <MdEdit size={20} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Button onClick={()=>handleShow(product.id)}>
                                            <MdDeleteForever size={20} />
                                        </Button>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col> 
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete products </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about that !!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleProductDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
export default Listproducts