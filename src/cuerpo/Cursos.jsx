import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col
} from 'reactstrap';

export default function Cursos() {
  const [modal, setModal] = useState(false);
  const [precio, setPrecio] = useState('');

  const toggle = (nuevoPrecio) => {
    setPrecio(nuevoPrecio);
    setModal(!modal);
  };

  const cursos = [
    {
      nombre: 'Tinkus',
      descripcion: 'Curso de danza Tinkus',
      imagen: 'https://folkloreboliviano.org/resources/media/picture/full/-20214.jpg',
      precio: '100 Bs'
    },
    {
      nombre: 'Tobas',
      descripcion: 'Curso de danza Tobas',
      imagen: 'https://live.staticflickr.com/4046/4626959321_3a22d63759_z.jpg',
      precio: '80 Bs'
    },
    {
      nombre: 'Morenada',
      descripcion: 'Curso de danza Morenada',
      imagen: 'https://noticiasncc.com/wp-content/uploads/2021/05/5ed6857fade68a10bce4f2d88f3a960bc47bd0ebminiw.jpg',
      precio: '120 Bs'
    }
  ];

  return (
    <Container className="my-4">
      <h2>Oferta de Cursos</h2>
      <Row>
        {cursos.map((curso, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <CardImg top src={curso.imagen} alt={curso.nombre} />
              <CardBody>
                <CardTitle tag="h5">{curso.nombre}</CardTitle>
                <CardText>{curso.descripcion}</CardText>
                <Button color="primary" onClick={() => toggle(curso.precio)}>
                  Ver Precio
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Precio del Curso</ModalHeader>
        <ModalBody>
          <h4>{precio}</h4>
        </ModalBody>
      </Modal>
    </Container>
  );
}
