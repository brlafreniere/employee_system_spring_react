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
        axios({url: `${process.env.REACT_APP_API_URL}/departments`}).then(response => {
            setDepartments(response.data)
        })
    }, [])

    const options = departments.map(department => {
        return {label: department.name, value: department.id}
    })

    return (
        <Select {...props} options={options} />
    )
}

const EmployeeForm = (props: any) => {
    const {id} = useParams<ParamsType>()
    const [employee, setEmployee] = useState<EmployeeType>({} as EmployeeType)
    const [formDisabled, setFormDisabled] = useState(null)
    const history = useHistory()
    
    // fetch and set employee state if an ID is present
    useEffect(() => {
        if (id) {
            axios({url: `${process.env.REACT_APP_API_URL}/employees/${id}`}).then(response => {
                setEmployee(response.data)
            })
        }
    }, [id])

    // enable/disable form based on the presence of an ID
    useEffect(() => {
        id ? setFormDisabled(true) : setFormDisabled(false)
    }, [id])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const payload = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            phoneNumber: employee.phoneNumber,
            emailAddress: employee.emailAddress,
            department: {
                id: employee.departmentId
            }
        }

        if (id) {
            axios({
                url: `${process.env.REACT_APP_API_URL}/employees`,
                method: "put",
                data: payload
            }).then(response => {
                history.push(`/employees/${id}`)
            }).catch(error => {
                console.log(error.response)
            })
        } else {
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
    }

    const setProperty = (obj) => {
        let new_obj = {} as EmployeeType
        Object.assign(new_obj, employee, obj)
        setEmployee(new_obj)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit} autoComplete="off">
                {id && (
                    <>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => setFormDisabled(false)}>Edit</button>
                        </div>
                    </div>
                    <hr />
                    </>
                )}
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
                            disabled={formDisabled}
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
                            disabled={formDisabled}
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
                            disabled={formDisabled}
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
                            disabled={formDisabled}
                            className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <label>Department [<span className="text-danger">*</span>]</label>
                        <DepartmentSelect
                        onChange={(e) => setProperty({departmentId: e.value})}
                        isDisabled={formDisabled}
                        required
                        value={Object.keys(employee).length > 0 && employee.department && {label: employee.department.name, value: employee.department.id}} />
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