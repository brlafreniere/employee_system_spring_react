import React, {useState, useEffect} from "react"
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"
import Select from "../FixRequiredSelect"

import Card from "../Card"
import EmployeeType from "../../types/EmployeeType"

interface ParamsType {
    id: string
}

const DepartmentSelect = (props: any) => {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/departments`
        }).then(response => {
            setDepartments(response.data)
        })
    }, [])

    const options = departments.map(department => {
        return {label: department.name, value: department.id}
    })

    return (
        <Select options={options} onChange={props.onChange} required />
    )
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
            phoneNumber: employee.phoneNumber,
            emailAddress: employee.emailAddress,
            departmentId: employee.departmentId
        }
        console.log(payload)
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
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>First Name [<span className="text-danger">*</span>]</label>
                            <input
                            type="text"
                            value={employee.firstName || ''}
                            onChange={(e) => {setProperty({firstName: e.target.value})}}
                            name="first_name"
                            required
                            className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Last Name [<span className="text-danger">*</span>]</label>
                            <input
                            type="text"
                            value={employee.lastName || ''}
                            onChange={(e) => {setProperty({lastName: e.target.value})}}
                            name="last_name"
                            required
                            className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
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
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Email Address [<span className="text-danger">*</span>]</label>
                            <input
                            type="text"
                            name="email_address"
                            value={employee.emailAddress || ''}
                            onChange={(e) => {setProperty({emailAddress: e.target.value})}}
                            required
                            className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <label>Department [<span className="text-danger">*</span>]</label>
                        <DepartmentSelect onChange={(e) => setProperty({departmentId: e.value})} />
                    </div>
                </div>
                <div className="mt-5">
                    <span className="text-danger">*</span> indicates a required field.
                </div>
                <div className="form-group mt-3">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </Card>
    )
}

export default EmployeeForm