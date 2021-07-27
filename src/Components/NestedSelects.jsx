import React, { useState } from 'react'
import SelectList from './SelectList'
const NestedSelects = () => {
    const [state, setState] = useState('')
    const [town, setTown] = useState('')
    const [suburb, setSuburb] = useState('')
    let token = `1837c3a9-081c-4ecf-ba43-a198028fbe79`
    return (
        <div>
            Dynamic Nested Select (API)
            <hr />
            
            <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${token} `} handleChange={(event) => { setState(event.target.value) }} />
            {
                state &&
                <SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${token} `} handleChange={(event) => { setTown(event.target.value) }} />
            }

            {
                town &&
                <SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${token}`} handleChange={(event) => { setSuburb(event.target.value) }} />
            }
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    )
}

export default NestedSelects
