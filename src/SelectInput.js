import React from 'react'

export default function SelectInput({ onChange, children, name }) {
    return <select className='form-control col-12 col-sm-6' onChange={onChange} name={name}>
        <option selected disabled>Please Choose A Starship</option>
        {children}
    </select>;
}
