import React, {useContext, useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import {useLocalStorage} from '../hooks/useLocalStorage'
import axios from "axios";
const StateContext = React.createContext()
export function useStateContext() {
    return useContext(StateContext)
}

export const StateProvider = ({children}) => {
    const [state, setState] = useLocalStorage("state", {
        budgets: [],
        users: []
    });
    function addBudget({name, max}) {
        setState(prevState => {
            return {
                ...prevState,
                budgets: [...prevState.budgets, {id: uuid(), name, max}]
            }
        })
    }
    function deleteBudget(id) {
        setState(prevState => {
            return {
                ...prevState,
                budgets: prevState.budgets.filter(budget => budget.id !== id)
            }
        })
    }
    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    users: users.data
                }
            })
        })
    }

    useEffect(()=> {
        getUsers()
    }, [])

    return (
        <StateContext.Provider value={{state , addBudget, deleteBudget}}>
            {children}
        </StateContext.Provider>)
};