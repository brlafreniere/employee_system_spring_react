import React from "react"
import {NavLink, Switch, Route} from "react-router-dom"

import "../../App.css"

import EmployeeDetails from "./EmployeeDetails"
import EmployeeIndex from "./EmployeeIndex"
import EmployeeForm from "./EmployeeForm"

const EmployeeSwitch = (props: any) => {
    return (
        <div>
            <h3 className="mb-5 text-center">Employees</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink exact to="/employees" className="nav-link" activeClassName="active">All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/employees/new" className="nav-link" activeClassName="active">New</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/employees/new" component={EmployeeForm} />
                <Route exact path="/employees" component={EmployeeIndex} />
                <Route exact path="/employees/:id" component={EmployeeForm} />
            </Switch>
        </div>
    )
}

export default EmployeeSwitch