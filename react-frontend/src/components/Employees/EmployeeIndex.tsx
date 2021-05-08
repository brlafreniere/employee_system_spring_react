import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import AppContext from "../../contexts/AppContext"
import Card from "../Card"

const EmployeesIndex = (props: any) => {
    const [employees, setEmployees] = useState<any[]>([])
    const appContext = useContext(AppContext)

    const fetchEmployees = () => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/employees`,
            method: 'get'
        }).then(response => {
            setEmployees(response.data)
        }).catch(error => {

        })
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    const deleteEmployee = (employeeId: number) => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/employees/${employeeId}`,
            method: 'delete'
        }).then(response => {
            fetchEmployees()
        }).catch(error => {
            appContext.setAlert({type: "danger", text: "Failed to delete employee."})
        })
    }

    return (
        <Card>
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(employee => (
                        <tr key={employee.id}>
                            <td>
                                <Link to={`/employees/${employee.id}`}>
                                    {employee.firstName} {employee.lastName}
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(employee.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    )
}

export default EmployeesIndex