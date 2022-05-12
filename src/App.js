import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import React, {useEffect, useState} from "react";
import axios from "axios";
import BudgetCard from "./components/BudgetCard"
import {AddBudgetModel} from "./components/AddBudgetModel"
import {NewCard} from "./components/NewCard"
import {useStateContext} from "./contexts/StateContext";
import {Stack, Button, Card} from 'react-bootstrap'

function App() {
    const [appState, setAppState] = useState({'clicks': 0})
    const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)
    const [users, setUsers] = useState([])

    const {state} = useStateContext()

    console.log("app run")


    useEffect(()=> {
        console.log("effect run")
    }, [])
    const cardClicked = () =>{
        console.log('click')
        setAppState((preState)=> {
            return {
                ...preState,
                clicks: preState.clicks++
            }
        })
    }
    const deleteHandle = (id) =>{
        console.log(id)
    }

  return (
      <>
    <Container className="my-4">
     <Stack direction="horizontal" gap="2" className="mb-4">
         <h1 className="me-auto">Budgets</h1>
         <Button variant="primary" onClick={()=>setShowAddBudgetModel(true)}>Add Budget</Button>
         <Button variant="outline-primary">Add Expense</Button>
     </Stack>
        {users.map((user, id) => {
            return (
                <Card key={user.id}>
                    <Card.Body>
                        <Card.Title >{user.name}</Card.Title>
                    </Card.Body>
                </Card>
            )
        })}

        <h4>{appState.clicks}</h4>
        <NewCard name="hi" description="test"/>
        <div className="grid">
            {state.budgets.map(budget => {
                return (
                <BudgetCard key={budget.id} id={budget.id} name={budget.name} max={budget.max}  clickedAdd={cardClicked} deleteHandle={()=>console.log(budget.id)} ></BudgetCard>
                )
            })}
        </div>
   </Container>
      <AddBudgetModel show={showAddBudgetModel} handleClose={()=>{setShowAddBudgetModel(false)}}/>
    </>
  );
}

export default App;
