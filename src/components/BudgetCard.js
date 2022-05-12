import {Stack, Button, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import './BudgetCard.css';
import React from "react";
import {currencyFormatter} from "../util"
import {useStateContext} from "../contexts/StateContext";

 function BudgetCard(props) {
     const {deleteBudget} = useStateContext()

     const deleteHandle = () =>{
         console.log(props.name)
     }
    const classNames = [];
    return (
        <Card className="budget-card">
            <Card.Body>
                <Card.Title className="title">
                    <div>{props.name}</div>
                    <div>{props.max}</div>
                </Card.Title>
                <Stack direction="horizontal" gap="2">
                    <Button onClick={props.clickedAdd}>Add</Button>
                    <Button onClick={()=>{deleteBudget(props.id)}}>Delete</Button>
                    <Button onClick={props.deleteHandle}>Delete2</Button>

                </Stack>
            </Card.Body>
        </Card>
    );
}



export default BudgetCard;
