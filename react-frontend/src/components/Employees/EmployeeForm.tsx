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
            firstName: event.target.first_name.value,
            lastName: event.target.last_name.value,
            phoneNumber: event.target.phone_number.value
        }
        axios({
            url: `${process.env.REACT_APP_API_URL}/employees`,
            method: "post",
            data: payload
        }).then(response => {
            history.push('/employees')
        }).catch(error => {
            console.log(error)
        })
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
                            value={employee.firstName}
                            onChange={(e) => {setEmployee({...employee, firstName: e.target.value})}}
                            name="first_name"
                            className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                            type="text"
                            name="last_name"
                            className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="text" name="phone_number" className="form-control" />
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