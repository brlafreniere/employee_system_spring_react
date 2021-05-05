import React from "react"

import {Switch, Route} from "react-router-dom"
import DepartmentIndex from "./DepartmentIndex"

const DepartmentSwitch = (props: Object) => {
    return (
        <Switch>
            <Route exact path="/departments" component={DepartmentIndex} />
        </Switch>
    )
}

export default DepartmentSwitch