import React, { useState, useEffect, useReducer } from 'react'
// Helper
import { helpHttp } from '../helpers/helpHttp'
import { crudReducer, initialState } from '../reducers/crudReducer'
// Components
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'
import { TYPES } from '../actions/crudActions'

const Crud = () => {
    // const [databaseData, setDatabaseData] = useState(null);
    const [state, dispatch] = useReducer(crudReducer, initialState)
    const { database } = state;
    const [editForm, setEditForm] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();  // helper
    let url = "http://localhost:5000/characters" // JSON-Server Endpoint (api)
    useEffect(() => {
        setLoading(true)
        // helpHttp = (HELPER)
        helpHttp().get(url).then((res) => {
            if (!res.error) {
                //setDatabaseData(res)
                dispatch({type: TYPES.READ_ALL_DATA, payload: res})
                setError(null)
            } else {
                //setDatabaseData(null)
                setError(res)
            }
            setLoading(false)
        })
    }, [url,]);
    const addData = (data) => {
        console.log("Sending data to API....", data)
        setLoading(true)
        const newItem = { id: Date.now(), name: data.name, team: data.team } // This item will be added
        // Set options to Post method
        let options = { headers: { "Content-type": "application/json" }, method: "POST", body: newItem }
        api.post(url, options).then((res) => {
            // console.log(res)
            if (!res.error) {
                // setDatabaseData([...databaseData, newItem]) // Method #1
                // setDatabaseData(databaseData.concat(newItem)) // Method #2
                dispatch({type: TYPES.CREATE_DATA, payload: res})
                setError(null)
            } else {
                console.log(res)
                //setDatabaseData(null)
                dispatch({type: TYPES.NO_DATA})
                setError(res)
            }
            setLoading(false)
        })
        // console.log("Character added: ", databaseData)
    }
    const updateData = (data) => {
        setLoading(true)
        let newUrl = `${url}/${data.id} `
        const updatedItem = data;
        // Add options to Put method
        let options = { headers: { "Content-type": "application/json" }, body: data, method: "PUT" }
        api.put(newUrl, options).then((res) => {
            // console.log(res)
            if (!res.error) {
                //setDatabaseData(newData) // Method #1
                dispatch({type: TYPES.UPDATE_DATA, payload: data})
                setError(null)
            } else {
                console.log(res)
                //setDatabaseData(null)
                dispatch({type: TYPES.NO_DATA})
                setError(res)
            }
            setLoading(false)
        })
    }
    const removeData = (idItem) => {
        setLoading(true)
        let newUrl = `${url}/${idItem} `
        // Set options to Put method
        let options = { headers: { "Content-type": "application/json" }, method: "DELETE" }
        api.del(newUrl, options).then((res) => {
            if (!res.error) {
          /*       // If no errors, just filter the database excluding the clicked item through ID
                console.log("Deleting this:", idItem)
                // Filter "Database data" avoiding the clicked item
                let newData = database.filter((item) => item.id !== idItem) */
                //setDatabaseData(newData);
                dispatch({type: TYPES.DELETE_DATA, payload: idItem})
                setLoading(false)
            } else {
                setError(res)
            }
        })
    }
    return (
        <div>
            <h3>Crud API (Fetch)</h3>
            <CrudForm addData={addData} updateData={updateData} editForm={editForm} setEditForm={setEditForm} />
            {loading &&
                <Loader />
            }
            {
                error &&
                <Message message={`Error code:  ${error.status} for: ${error.statusText} `} bgColor={'red'} />
            }
            {
                // Only show table if exist data
                database &&
                <CrudTable data={database} setEditForm={setEditForm} removeData={removeData} />
            }
        </div>
    )
}
export default Crud
