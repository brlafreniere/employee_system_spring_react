import React, {useEffect, useState} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"

import Card from "../Card"

import EmployeeType from "../../types/EmployeeType"

interface ParamTypes {
    id: string
}

const EmployeeDetails = (props: any) => {
    const {id} = useParams<ParamTypes>()
    const [employee, setEmployee] = useState<EmployeeType | null>(null)
    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_API_URL}/employees/${id}`
        }).then(response => {
            setEmployee(response.data)
        })
    }, [id])

    if (employee) {
        return (
            <Card>
                <h4>{employee.firstName} {employee.lastName}</h4>
                <hr />
                <div>{employee.phoneNumber}</div>
            </Card>
        )
    } else {
        return null
    }
}

export default EmployeeDetails