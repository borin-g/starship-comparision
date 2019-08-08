import React from 'react'

export default function Table({ children }) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Properties</th>
                    <th>Starship 1</th>
                    <th>Starship 2</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}