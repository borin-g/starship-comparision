import React from 'react'

export default function SelectInput({ handleChange, children }) {
    return <select className='form-control col-12 col-sm-6' onChange={handleChange}>{children}</select>;
}
