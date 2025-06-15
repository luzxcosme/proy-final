import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
  return (
    <Navbar color="light" light expand="md" className="mb-4">
      <Container>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/inicio" className="font-weight-bold">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cursos" className="font-weight-bold">Cursos</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
