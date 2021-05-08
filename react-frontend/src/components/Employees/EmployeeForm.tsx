import React, {useState, useEffect} from "react"
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"

import Card from "../Card"
import EmployeeType from "../../types/EmployeeType"

interface ParamsType {
    id: string
}

const EmployeeForm = (props: any) => {
    const {id} = useParams<ParamsType>()
    const [employee, setEmployee] = useState<EmployeeType>({} as EmployeeType)
    const history = useHistory()
    
    useEffect(() => {
        if (id) {
            axios({
                url: `${process.env.REACT_APP_API_URL}/employees/${id}`
            }).then(response => {
                setEmployee(response.data)
            })
        }
    }, [id])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const payload = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            phoneNumber: employee.phoneNumber
        }
        axios({
            url: `${process.env.REACT_APP_API_URL}/employees`,
            method: "post",
            data: payload
        }).then(response => {
            history.push('/employees')
        }).catch(error => {
            console.log(error.response)
        })
    }

    const setProperty = (obj) => {
        let new_obj = {} as EmployeeType
        Object.assign(new_obj, employee, obj)
        setEmployee(new_obj)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                            type="text"
                            value={employee.firstName || ''}
                            onChange={(e) => {setProperty({firstName: e.target.value})}}
                            name="first_name"
                            className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                            type="text"
                            value={employee.lastName || ''}
                            onChange={(e) => {setProperty({lastName: e.target.value})}}
                            name="last_name"
                            className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                            type="text"
                            name="phone_number"
                            value={employee.phoneNumber || ''}
                            onChange={(e) => {setProperty({phoneNumber: e.target.value})}}
                            className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </Card>
    )
}

export default EmployeeForm