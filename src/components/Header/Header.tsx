import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";

import {useNavigate} from 'react-router-dom'

const Header = () =>{

    const navigate = useNavigate();

    return (
        <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>

              <Navbar.Brand onClick={()=> navigate ('/')} style={{paddingLeft:'5px'}}>Guillermo Bellido Pagina</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link onClick={()=> navigate ('/')} style={{paddingLeft:'5px'}}>MENU PRINCIPAL</Nav.Link>
                  <Nav.Link onClick={()=> navigate ('/componentes')} style={{paddingLeft:'5px'}}>COMPONENTES</Nav.Link>
                  <Nav.Link onClick={()=> navigate ('/administracion')} style={{paddingLeft:'5px'}}>ADMINISTRACION</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown" >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled style={{paddingLeft:'5px'}}>
                    Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="BUSCAR"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">BUSCAR</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
} 


 export default Header;