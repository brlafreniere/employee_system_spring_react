import React from "react"
import {NavLink} from "react-router-dom"

import {Switch, Route} from "react-router-dom"
import DepartmentIndex from "./DepartmentIndex"
import DepartmentForm from "./DepartmentForm"

const DepartmentSwitch = (props: Object) => {
    return (
        <div className="">
            <h3 className="mb-5 text-center">Departments</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink exact to="/departments" className="nav-link" activeClassName="active">All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/departments/new" className="nav-link" activeClassName="active">New</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/departments" component={DepartmentIndex} />
                <Route exact path="/departments/new" component={DepartmentForm} />
                <Route exact path="/departments/:id" component={DepartmentForm} />
            </Switch>
        </div>
    )
}

export default DepartmentSwitch