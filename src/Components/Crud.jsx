import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const Crud = () => {
    const initialDb = [
        {
            id: 1,
            name: "Jill",
            team: "STARS",
        },
        {
            id: 2,
            name: "Chris",
            team: "STARS",
        },
        {
            id: 3,
            name: "Leon",
            team: "PRD",
        },
        {
            id: 4,
            name: "Nicholai",
            team: "UBCS",
        }, {
            id: 5,
            name: "Vector",
            team: "USS",
        }
    ]
    const [databaseData, setDatabaseData] = useState(initialDb);
    const [editForm, setEditForm] = useState(null);
    const addData = (data) => {
        console.log("Sending data to Database....", data)
        const newItem = { id: Date.now(), name: data.name, team: data.team }
        setDatabaseData([...databaseData, newItem]) // Method #2
        // setDatabaseData(databaseData.concat(newItem)) // Method #1
        console.log("Character added: ", databaseData)
    }
    const updateData = (data) => {
        console.log("Updating this: ", data)
        const updatedItem = data;
        let newItem = databaseData.map((item) => {
            // item.id === updatedItem.id ? updatedItem : item Option #1
            if (item.id === updatedItem.id) {
                return updatedItem
            } else {
                return item
            }
        })
        setDatabaseData(newItem)
    }
    const removeData = (idItem) => {
        console.log("Deleting this:", idItem)
        // Filter "Database data" avoiding the clicked item
        let newData = databaseData.filter((item) => item.id !== idItem)
        setDatabaseData(newData);
    }
    return (
        <div>
            <h3>Crud component (Offline)</h3>
            <CrudForm addData={addData} updateData={updateData} editForm={editForm} setEditForm={setEditForm} />
            <CrudTable data={databaseData} setEditForm={setEditForm} removeData={removeData} />
        </div>
    )
}

export default Crud
