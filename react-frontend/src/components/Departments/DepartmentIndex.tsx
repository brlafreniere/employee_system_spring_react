import React, {useState, useContext, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import AppContext from "../../contexts/AppContext"
import Card from "../Card"

const DepartmentIndex = (props: Object) => {
    const [departments, setDepartments] = useState<any[]>([])
    const appContext = useContext(AppContext)

    const fetchDepartments = () => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/departments`,
            method: 'get'
        }).then(response => {
            setDepartments(response.data)
        }).catch(error => {

        })
    }

    useEffect(() => {
        fetchDepartments()
    }, [])

    const deleteDepartment = (departmentId: number) => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/departments/${departmentId}`,
            method: 'delete'
        }).then(response => {
            fetchDepartments()
        }).catch(error => {
            appContext.setAlert({type: "danger", text: "Failed to delete department."})
        })
    }

    return (
        <Card>
            <table className="table table-bordered" style={{tableLayout: 'fixed'}}>
                <thead className="thead-light">
                    <tr className="bg-light">
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments && departments.map(department => (
                        <tr key={department.id}>
                            <td>
                                <Link to={`/departments/${department.id}`}>
                                    {department.name}
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteDepartment(department.id)}>
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

export default DepartmentIndex