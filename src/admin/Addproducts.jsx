import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../Redux/productSlice';

function AddProduct() {
    const { Formik } = formik;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const schema = yup.object().shape({
        productname: yup.string().required("product name please"),
        productprice: yup.number().positive("please enter a valid price").required("enter price"),
        productdescription: yup.string()
            .required("product description please")
            .min(2, "description should be at least 2 characters"),
        productphoto: yup.string().required("product photo please"),
    });

    const handleAddproducts = (values) => {
        values.id = Date.now(); //generate unique id for each product
        dispatch(addProduct(values));
        toast.success("the product was added successfully!");
        navigate("/");
    }

    return (
        <Container className='min-vh-100 min- d-flex justify-content-center align-items-center'>
            <Row className='justify-content-center'>
                <Col md={4} className="w-100">
                    <Row>
                        <Col>
                            <h4>Add Products</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <Formik
                                validationSchema={schema}
                                onSubmit={handleAddproducts}
                                initialValues={{
                                    productname: '',
                                    productprice: '',
                                    productdescription: '',
                                    productphoto: '',

                                }}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="validationFormik01">
                                                <Form.Label>Product Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="productname"
                                                    value={values.productname}
                                                    onChange={handleChange}
                                                    isValid={touched.productname && !errors.productname}
                                                    isInvalid={touched.productname && !!errors.productname}
                                                />
                                                <Form.Control.Feedback type='invalid'>
                                                    {errors.productname}
                                                    {/* only show when error occurs */}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="validationFormik01">
                                                <Form.Label>Product Price</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="productprice"
                                                    value={values.productprice}
                                                    onChange={handleChange}
                                                    isValid={touched.productprice && !errors.productprice}
                                                    isInvalid={touched.productprice && !!errors.productprice}
                                                />
                                                <Form.Control.Feedback type='invalid'>
                                                    {errors.productprice}
                                                    {/* only show when error occurs */}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Row>
                                        <Row className='mb-4'>
                                            <Form.Group as={Col} controlId="validationFormik02">
                                                <Form.Label>Product Description</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    name="productdescription"
                                                    value={values.productdescription}
                                                    onChange={handleChange}
                                                    isValid={touched.productdescription && !errors.productdescription}
                                                    isInvalid={touched.productdescription && !!errors.productdescription}
                                                />

                                                <Form.Control.Feedback type='invalid'>
                                                    {errors.productdescription}
                                                    {/* only show when error occurs */}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Row>

                                        <Row className='mb-4'>
                                            <Form.Group as={Col} controlId="validationFormik02">
                                                <Form.Label>Product Photo</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name="productphoto"
                                                    value={values.productphoto}
                                                    onChange={handleChange}
                                                    isValid={touched.productphoto && !errors.productphoto}
                                                    isInvalid={touched.productphoto && !!errors.productphoto}
                                                />

                                                <Form.Control.Feedback type='invalid'>
                                                    {errors.productphoto}
                                                    {/* only show when error occurs */}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Row>

                                        <div className='d-grid'>
                                            <Button type="submit">Add Product</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AddProduct;