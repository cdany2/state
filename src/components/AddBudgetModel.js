import {Modal, Form, Button} from 'react-bootstrap'
import {useRef} from 'react'
import {useStateContext} from "../contexts/StateContext";
export  function AddBudgetModel({show, handleClose}) {
    const nameRef = useRef()
    const maxRef = useRef()
    const {addBudget} = useStateContext()

    function handleSubmit(e) {
        e.preventDefault();
        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        });
        handleClose()
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text"/>
                        <Form.Label>Spend</Form.Label>
                        <Form.Control ref={maxRef}  type="number"/>
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </Modal.Body>
            </Form>
        </Modal>
    )
}