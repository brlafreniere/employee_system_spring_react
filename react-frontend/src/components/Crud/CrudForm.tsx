import React, {useState, useEffect} from "react"
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"

import Card from "../Card"
import EmployeeType from "../../types/EmployeeType"

const CrudForm = (props: any) => {
    const {id} = useParams<any>()
    const [record, setRecord] = useState<any>({})
    const [formDisabled, setFormDisabled] = useState(null)
    const history = useHistory()
    
    // fetch and set employee state if an ID is present
    useEffect(() => {
        if (id) {
            axios({url: `${process.env.REACT_APP_API_URL}${props.recordApiPath}/${id}`}).then(response => {
                setRecord(response.data)
            })
        }
    }, [id])

    // enable/disable form based on the presence of an ID
    useEffect(() => {
        id ? setFormDisabled(true) : setFormDisabled(false)
    }, [id])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const payload = props.payloadCallback(record)

        if (id) {
            axios({
                url: `${process.env.REACT_APP_API_URL}${props.recordApiPath}/${id}`,
                method: "put",
                data: payload
            }).then(response => {
                history.push(`${props.redirectOnSubmit || props.recordApiPath}/${id}`)
            }).catch(error => {
                console.log(error.response)
            })
        } else {
            axios({
                url: `${process.env.REACT_APP_API_URL}${props.recordApiPath}`,
                method: "post",
                data: payload
            }).then(response => {
                history.push(props.redirectOnSubmit || props.recordApiPath)
            }).catch(error => {
                console.log(error.response)
            })
        }
    }

    const setProperty = (obj) => {
        let new_obj = JSON.parse(JSON.stringify(obj))
        Object.assign(new_obj, record, obj)
        setRecord(new_obj)
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
                {props.inputsCallback(record, props, setProperty, formDisabled)}
            </form>
        </Card>
    )
}

export default CrudForm