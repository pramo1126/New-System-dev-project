import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const AdminDashboard = () => {
//     return (

//         <div className="col p-0 m-0">
//             <div className="p-2 d-flex justify-content-center shadow">
//                 <h4 className="text-center"> Admin Dashboard - Sameera Grocery Store</h4>
//             </div>
//         </div>


//     )
// }

    return (
    <div>

        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#F2B75E' }} variant="dark"
        className="black-text">
            <Container>
                <br></br><br></br>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"   />
                   
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                            
                            <Nav.Link href="/AdminDashboard" style={{ color: 'black' }}>Admin Dashboard </Nav.Link>
                            <NavDropdown title="Product Categories" style={{ color: 'black' }} id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/AdminBiscuits">Biscuits & Snacks </NavDropdown.Item>
                                <NavDropdown.Item href="/AdminPasta" >Pasta & Cereals</NavDropdown.Item>
                                <NavDropdown.Item href="/AdminBeverages" >Beverages & Dairy Products </NavDropdown.Item>
                                <NavDropdown.Item href="/AdminFrozen">Frozen Foods</NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Link href="/Orders" style={{ color: 'black' }}> Orders</Nav.Link>
                            <Nav.Link href="/ProductInventory" style={{ color: 'black' }}> Product Inventory</Nav.Link>
                            
                    </Nav>
                    <Nav>
                       
                            <Nav.Link eventKey={2} href="/Login" style={{ color: 'black' }}>Logout</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </div>
     
    )
}

export default AdminDashboard
