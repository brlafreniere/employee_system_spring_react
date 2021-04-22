import React, { useEffect, useState } from "react"
import axios from "axios"

import "../App.css"

const Employees = (props: any) => {
    const [employees, setEmployees] = useState<any[]>([])

    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/employees`,
            method: 'get'
        }).then(response => {
            setEmployees(response.data)
        }).catch(error => {

        })
    }, [])

    return (
        <div>
            {employees && employees.map(employee => (
                <div key={employee.id}>
                    <h2>{employee.firstName}</h2>
                </div>
            ))}
        </div>
    )
}

export default Employees