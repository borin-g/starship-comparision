import React from 'react'

export default function TableRow({ th, td1, td2 }) {
    const background1 = ((Number(td1) && Number(td2)) ?
        Number(td1) > Number(td2) ? 'redBackground' : ''
        : '');
    const background2 = ((Number(td1) && Number(td2)) ?
        Number(td1) < Number(td2) ? 'redBackground' : ''
        : '');
    return (
        <tr>
            <th>{th}</th>
            <td className={background1}>{td1}</td>
            <td className={background2}>{td2}</td>
        </tr>
    )
}

//TODO Add styling to td that is greater in number