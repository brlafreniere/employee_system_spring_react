import React, {useState, useEffect} from "react"
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"

import CrudForm from "../Crud/CrudForm"
import Card from "../Card"
import EmployeeType from "../../types/EmployeeType"
import DepartmentSelect from "../Departments/DepartmentSelect"

const EmployeeForm = (props: any) => {
    const payloadCallback = (employee) => {
        return {
            firstName: employee.firstName,
            lastName: employee.lastName,
            phoneNumber: employee.phoneNumber,
            emailAddress: employee.emailAddress,
            department: {
                id: employee.department.id
            }
        }
    }

    const inputsCallback = (employee, props, setProperty, formDisabled) => (
        <>
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
                        onChange={(e) => setProperty({department: {id: e.value, name: e.label}})}
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
        </>
    )
    return (
        <CrudForm
            recordApiPath="/employees"
            inputsCallback={inputsCallback}
            payloadCallback={payloadCallback} />
    )
}

export default EmployeeForm