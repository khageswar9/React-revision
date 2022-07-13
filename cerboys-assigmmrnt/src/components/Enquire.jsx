import React from 'react';
import './enquire.css'

function List({data}) {
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead className='headoftable'>
                    <tr>
                        <th>S.No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((obj, i) => (
                            <tr key={obj.enquiry_id}>
                                <td>{i + 1}</td>
                                <td>{obj.first_name}</td>
                                <td>{obj.last_name}</td>
                                <td>{obj.contact_number}</td>
                                <td>{obj.email}</td>
                                <td>click here to know more</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List