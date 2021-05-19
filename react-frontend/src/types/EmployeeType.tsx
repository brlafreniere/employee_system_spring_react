import DepartmentType from "./DepartmentType"

interface EmployeeType {
    id?: string,
    firstName: string,
    lastName: string,
    phoneNumber?: string,
    emailAddress: string,
    department: DepartmentType
}

export default EmployeeType