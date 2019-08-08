import React from 'react'

export default function TableRow({ th, td1, td2 }) {

    return (
        <tr>
            <th>{th}</th>
            <td>{td1}</td>
            <td>{td2}</td>
        </tr>
    )
}

//TODO Add styling to td that is greater in number