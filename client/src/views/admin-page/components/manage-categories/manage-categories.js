import React from 'react'
import { Table, Modal, Button, Form } from 'react-bootstrap';
export const FormCategory = () => {
    return (
        <Form>
            <Form.Group controlId="formCategoryName">
                <Form.Label>Category Name </Form.Label>
                <Form.Control type="name" placeholder="Enter Category Name " />
            </Form.Group>
            <Button variant="primary" type="submit">
                Edit Category
                </Button>
        </Form>
    );
}

export default function CategoryTable(props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <div>
            <br />
            <br />
            <button
                style={{marginTop:"40px", width:"80px"}}
                className="btn btn-primary"
                onClick={handleShow}>
                +
            </button>
            <Table className="mt-4" striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        Categories.map(Category =>
                            <tr key={Category.ID}>
                                <td>{Category.ID}</td>
                                <td>{Category.Name}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={handleShow}>edit</button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={() => this.deleteItem(Category.ID)}>remove</button>
                                </td>
                            </tr>
                        )
                    } */}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Author</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCategory />
                </Modal.Body>
            </Modal>
        </div>
    );
}