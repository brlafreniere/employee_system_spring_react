import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import AppContext from "../../contexts/AppContext"
import Card from "../Card"
import EmployeeType from "../../types/EmployeeType"
import CrudIndex from "../Crud/CrudIndex"

const EmployeeIndex = (props: any) => {
    const thead = () => (
        <>
            <th style={{width: "4%"}} className="text-center"></th>
            <th>Name</th>
            <th>Department</th>
        </>
    )

    const tbody = (records, toggleSelected) => (
        <>
            {records && records.map((record: any) => (
                <tr key={record.id}>
                    <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center pt-2">
                            <input type="checkbox" className="w-auto" onClick={(e) => {toggleSelected(e, record)}} />
                        </div>
                    </td>
                    <td>
                        <Link to={`/employees/${record.id}`}>
                            {record.firstName} {record.lastName}
                        </Link>
                    </td>
                    <td>
                        {record.department.name}
                    </td>
                </tr>
            ))}
        </>
    )

    return (
        <CrudIndex tbody={tbody} thead={thead} recordsApiPath={"/employees"} />
    )
}

export default EmployeeIndex