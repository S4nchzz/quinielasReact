import React, { useContext } from "react";
import { QuinielasContext } from "./context/QuinielasContext";
import Quiniela from "./Quiniela";
import { Row, Col, Container } from "react-bootstrap";

export default function Quinielas() {
    const { quinielasJson } = useContext(QuinielasContext)
    
    return (
        <Container className="mt-5">
            <Row>
                {
                    quinielasJson.map(item => {
                        return (
                            <Col>
                                <Quiniela data={item} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
};
