import React from 'react';
import { Link } from 'react-router-dom';

function TableData({ children, to }) {
    const content = to ? (
        <Link to={to}>{children}</Link>
    ) : (
        <div>{children.id}</div>
    )

    return <td>{content}</td>
}

export default TableData;