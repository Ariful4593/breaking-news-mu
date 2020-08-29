import React from 'react';
import {Navbar,Nav,Link,Form,Button,FormControl,} from 'react-bootstrap'
const TopNav = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{position: '-webkit-sticky',
    position: 'sticky',top:"0px",zIndex: '1'
  }} >
                <Navbar.Brand href="#home">Fox News</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">World</Nav.Link>
                    <Nav.Link href="#pricing">Politics</Nav.Link>
                    <Nav.Link href="#pricing">Politics</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    );
};

export default TopNav;