import React from "react"

import Alert from "../types/Alert"

interface AppContextInterface {
    alert: Alert
    setAlert: React.Dispatch<React.SetStateAction<Alert>>
}

const AppContext = React.createContext<AppContextInterface | undefined>(undefined)

export default AppContext