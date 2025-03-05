import { Button, Card , Col, Modal} from "react-bootstrap"
import Partido from "./Partido"
import { useState } from "react"
import { Form } from "react-bootstrap"

export default function Quiniela({data}) {
    const [showPartidos, setShowPartidos] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleChange = () => {
        
    }

    return (
        <>
            <Col>
                    <Card className="p-3">
                    <h3>{data.fecha}</h3>
                    <h4>{data.jornada}</h4>

                    <h5>Partidos: </h5>
                    <div className="mb-3" style={{display: 'flex', gap: '2%'}}>
                        <Button onClick={() => setShowPartidos(!showPartidos)}>Ver partidos</Button>
                        <Button variant="success" onClick={() => setShowModal(!showModal)}>Añadir apuesta</Button>
                    </div>

                    {
                        showPartidos && 
                        
                        data.partidos.map(item => {
                            return <Partido partidoData={item}/>
                        })
                        
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
              value={data.local}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="visitante">
            <Form.Label>Visitante</Form.Label>
            <Form.Control
              type="text"
              name="visitante"
              value={data.visitante}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="apuestas1">
            <Form.Label>Apuesta 1</Form.Label>
            <Form.Control
              type="number"
              name="1"
              value={data.apuestas[1]}
              onChange={handleApuestaChange}
            />
          </Form.Group>
          <Form.Group controlId="apuestasX">
            <Form.Label>Apuesta X</Form.Label>
            <Form.Control
              type="number"
              name="X"
              value={data.apuestas.X}
              onChange={handleApuestaChange}
            />
          </Form.Group>
          <Form.Group controlId="apuestas2">
            <Form.Label>Apuesta 2</Form.Label>
            <Form.Control
              type="number"
              name="2"
              value={data.apuestas[2]}
              onChange={handleApuestaChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={() => console.log(data)}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
        </>
    )
};
