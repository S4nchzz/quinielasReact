import { Button, Card, Col, Modal, Form } from "react-bootstrap";
import Partido from "./Partido";
import { useState } from "react";

export default function Quiniela({ data }) {
  const [showPartidos, setShowPartidos] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    local: "",
    visitante: "",
    apuestas: {
      1: "",
      X: "",
      2: "",
    },
  });

  const [formDataFilled, setFormDataFilled] = useState(false)

  const handleLocalChange = (e) => {
    setFormData({ ...formData, local: e.target.value });
  };

  const handleVisitanteChange = (e) => {
    setFormData({ ...formData, visitante: e.target.value });
  };

  const handleApuestaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      apuestas: {
        ...formData.apuestas,
        [name]: value,
      },
    });
  };

  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);

    setFormDataFilled(true)

    setShowModal(false);
  };

  return (
    <>
      <Col>
        <Card className="p-3">
          <h3>{data.fecha}</h3>
          <h4>{data.jornada}</h4>

          <h5>Partidos: </h5>
          <div className="mb-3" style={{ display: "flex", gap: "2%" }}>
            <Button onClick={() => setShowPartidos(!showPartidos)}>
              Ver partidos
            </Button>
            <Button variant="success" onClick={() => setShowModal(true)}>
              Añadir apuesta
            </Button>
          </div>

          {showPartidos &&
            data.partidos.map((item) => {
              return <Partido partidoData={item} key={item.id}/>;
            })}

            {
                formDataFilled &&
                <Partido partidoData={formData}/>
            }
        </Card>
      </Col>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Partido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="local">
              <Form.Label>Local</Form.Label>
              <Form.Control
                type="text"
                name="local"
                value={formData.local}
                onChange={handleLocalChange}
              />
            </Form.Group>
            <Form.Group controlId="visitante">
              <Form.Label>Visitante</Form.Label>
              <Form.Control
                type="text"
                name="visitante"
                value={formData.visitante}
                onChange={handleVisitanteChange}
              />
            </Form.Group>
            <Form.Group controlId="apuestas1">
              <Form.Label>Apuesta 1</Form.Label>
              <Form.Control
                type="number"
                name="1"
                value={formData.apuestas["1"]}
                onChange={handleApuestaChange}
              />
            </Form.Group>
            <Form.Group controlId="apuestasX">
              <Form.Label>Apuesta X</Form.Label>
              <Form.Control
                type="number"
                name="X"
                value={formData.apuestas["X"]}
                onChange={handleApuestaChange}
              />
            </Form.Group>
            <Form.Group controlId="apuestas2">
              <Form.Label>Apuesta 2</Form.Label>
              <Form.Control
                type="number"
                name="2"
                value={formData.apuestas["2"]}
                onChange={handleApuestaChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}