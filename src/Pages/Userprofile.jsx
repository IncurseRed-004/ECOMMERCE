import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Userprofile = () => {
    const { user } = useSelector((state) => state.userState);

    if (!user) {
        return (
            <Container className="mt-5">
                <h3 className="text-center">Please Login First</h3>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow p-4 text-center">

                        <Image
                            src={
                                user?.profilePhoto ||
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                            roundedCircle
                            width={150}
                            height={150}
                            className="mx-auto mb-3"
                        />
                        <h3>{user?.fullname}</h3>

                        <hr />

                        <p>
                            <strong>Email:</strong> {user?.email}
                        </p>

                        <p>
                            <strong>Role:</strong> {user?.role}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            {user?.status ? "Active" : "Inactive"}
                        </p>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Userprofile;