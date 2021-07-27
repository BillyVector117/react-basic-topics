import React, { useState, useEffect } from 'react' 
// Helper
import { helpHttp } from '../helpers/helpHttp'
// Components
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'

const Crud = () => {
    const [databaseData, setDatabaseData] = useState(null);
    const [editForm, setEditForm] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();  // helper
    let url = "http://localhost:5000/characters" // JSON-Server Endpoint (api)
    useEffect(() => {
        setLoading(true)
        //  api.get(url).then.... Instead helpHttp().get... // Causes an infinite bucle
        // USING helpHttp (HELPER)
        helpHttp().get(url).then((res) => {
            // console.log(res)
            if (!res.error) {
                setDatabaseData(res)
                setError(null)
            } else {
                setDatabaseData(null)
                setError(res)
            }
            setLoading(false)
            /* 
            NOT USING helpHttp (HELPER)
            then(function (response) {
                if (response.ok) {
                response.json().then((res) => {
                    setDatabaseData(res)
                    setError(null)
                })
            } else {
                let res = response.error
                console.log('Respuesta de red OK pero respuesta HTTP no OK');
                setDatabaseData(null)
                setError(res)
            }
        })
        setLoading(false) 
        */
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
                setDatabaseData([...databaseData, newItem]) // Method #1
                // setDatabaseData(databaseData.concat(newItem)) // Method #2
                setError(null)
            } else {
                console.log(res)
                setDatabaseData(null)
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
        // Set options to Put method
        let options = { headers: { "Content-type": "application/json" }, body: data, method: "PUT" }

        api.put(newUrl, options).then((res) => {
            // console.log(res)
            if (!res.error) {
                // This map returns a new Array with the updated item.
                let newData = databaseData.map((item) => {
                    // item.id === updatedItem.id ? updatedItem : item Option #1
                    if (item.id === updatedItem.id) {
                        console.log(`Updating: ${item} to this: ${data} `)
                        return updatedItem
                    } else {
                        return item
                    }
                })
                setDatabaseData(newData) // Method #1
                setError(null)
            } else {
                console.log(res)
                setDatabaseData(null)
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
                // If no errors, just filter the database excluding the clicked item through ID
                console.log("Deleting this:", idItem)
                // Filter "Database data" avoiding the clicked item
                let newData = databaseData.filter((item) => item.id !== idItem)
                setDatabaseData(newData);
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
                databaseData &&
                <CrudTable data={databaseData} setEditForm={setEditForm} removeData={removeData} />
            }
        </div>
    )
}
export default Crud
