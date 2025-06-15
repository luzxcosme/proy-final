import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Container
} from 'reactstrap';

export default function Inicio() {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  const danzas = [
    { id: 'item1', titulo: 'Tinkus', descripcion: 'El Tinku es una danza y ritual boliviano con orígenes ancestrales, que se celebra principalmente en el norte de Potosí y el sur de Oruro.' },
    { id: 'item2', titulo: 'Morenada', descripcion: 'La Morenada es una danza folklórica boliviana que se caracteriza por el uso de máscaras con rasgos exagerados de personas negras y trajes coloridos.' },
    { id: 'item3', titulo: 'Llamerada', descripcion: 'La llamerada es una danza tradicional boliviana que representa la relación entre el hombre andino y la llama, utilizada como medio de transporte y sustento.' },
    { id: 'item4', titulo: 'Tobas', descripcion: '"Tobas" puede referirse a dos cosas principales: el pueblo indígena toba (también conocido como qom) y la danza folklórica boliviana de los tobas.' },
    { id: 'item5', titulo: 'Chacarera', descripcion: 'La chacarera es una danza y música tradicional argentina, originaria de Santiago del Estero, que también se practica en el sur de Bolivia, especialmente en Tarija.' }
  ];

  return (
    <Container className="my-4">
      <h2>Danzas</h2>
      <Accordion open={open} toggle={toggle}>
        {danzas.map((danza) => (
          <AccordionItem key={danza.id}>
            <AccordionHeader targetId={danza.id}>
              {danza.titulo}
            </AccordionHeader>
            <AccordionBody accordionId={danza.id}>
              {danza.descripcion}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}