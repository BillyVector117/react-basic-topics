import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data, setEditForm, removeData }) => {
    return (
        <div>
            <h3>Characters data</h3>
            <table>
                <thead>
                    <tr>
                        <th style={{ color: "#61dafb" }}>Name</th>
                        <th style={{ color: "#61dafb" }}>Team</th>
                        <th style={{ color: "#61dafb" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                        (data.map((item) => <CrudTableRow key={item.id} item={item} setEditForm={setEditForm} removeData={removeData} />))
                        :
                        (<tr><td colSpan="3"> No data </td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
