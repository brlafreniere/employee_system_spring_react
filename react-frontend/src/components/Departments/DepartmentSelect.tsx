import React, {useState, useEffect} from "react"
import Select from "../FixRequiredSelect"
import axios from "axios"

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

export default DepartmentSelect 