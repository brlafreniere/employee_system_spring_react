import React, {useState, useEffect, useContext, Props} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import AppContext from "../../contexts/AppContext"
import Card from "../Card"

const CrudIndex = (props: any) => {
    const [records, setRecords] = useState<any[]>([])
    const [selectedRecords, setSelectedRecords] = useState<any[]>([])
    const appContext = useContext(AppContext)

    const fetchRecords = () => {
        axios({
            url: `${process.env.REACT_APP_API_URL}${props.recordsApiPath}`,
            method: 'get'
        }).then(response => {
            setRecords(response.data)
        }).catch(error => {

        })
    }

    const toggleSelected = (event, toggledRecord) => {
        if (event.target.checked) {
            setSelectedRecords([...selectedRecords, toggledRecord])
        } else {
            setSelectedRecords(selectedRecords.filter(record => record !== toggledRecord))
        }
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    const deleteRecord = (recordId: number) => {
        axios({
            url: `${process.env.REACT_APP_API_URL}${props.recordsApiPath}/${recordId}`,
            method: 'delete'
        }).then(response => {
            fetchRecords()
        }).catch(error => {
            appContext.setAlert({type: "danger", text: "Failed to delete."})
        })
    }

    return (
        <Card>
            <div className="mb-3">
                <div className="dropdown">
                    <button className="btn dropdown-toggle text-white" type="button" id="action-menu" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#FF4E50"}} disabled={selectedRecords.length == 0}>
                        Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="action-menu">
                        <li><a className="dropdown-item" href="#">Delete Selected</a></li>
                    </ul>
                </div>
            </div>
            <table className="table table-bordered table-sm">
                <thead className="thead-light">
                    <tr className="bg-light text-center">
                        {props.thead()}
                    </tr>
                </thead>

                <tbody>
                    {props.tbody(records, toggleSelected)}
                </tbody>
            </table>
        </Card>
    )
}

export default CrudIndex