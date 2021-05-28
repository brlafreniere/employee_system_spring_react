import React, {useEffect, useState} from "react"
import {useParams, useHistory} from "react-router-dom"
import axios from "axios"

import Card from "../Card"
import DepartmentType from "../../types/DepartmentType"

interface ParamsType {
    id: string
}

const DepartmentForm = (props: any) => {
    const {id} = useParams<ParamsType>()
    const [department, setDepartment] = useState<DepartmentType>({} as DepartmentType)
    const history = useHistory()
    
    useEffect(() => {
        if (id) {
            axios({
                url: `${process.env.REACT_APP_API_URL}/departments/${id}`
            }).then(response => {
                setDepartment(response.data)
            })
        }
    }, [id])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const payload = {
            name: department.name,
        }
        
        if (id) {
            axios({
                url: `${process.env.REACT_APP_API_URL}/departments/${id}`,
                method: "put",
                data: payload
            }).then(response => {
                history.push('/departments')
            }).catch(error => {
                console.log(error.response)
            })
        } else {
            axios({
                url: `${process.env.REACT_APP_API_URL}/departments`,
                method: "post",
                data: payload
            }).then(response => {
                history.push('/departments')
            }).catch(error => {
                console.log(error.response)
            })
        }
    }

    const setProperty = (obj) => {
        let new_obj = {} as DepartmentType
        Object.assign(new_obj, department, obj)
        setDepartment(new_obj)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Name [<span className="text-danger">*</span>]</label>
                            <input
                            type="text"
                            value={department.name || ''}
                            onChange={(e) => {setProperty({name: e.target.value})}}
                            name="name"
                            required
                            className="form-control" />
                        </div>
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

export default DepartmentForm