package io.blainelafreniere.employeesystem.validators;

import io.blainelafreniere.employeesystem.entities.Employee;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class EmployeeValidator implements Validator {
    @Override
    public boolean supports(Class class_x) {
        return Employee.class.equals(class_x);
    }

    @Override
    public void validate(Object obj, Errors e) {
        ValidationUtils.rejectIfEmpty(e, "firstName", "firstName.empty");
        Employee employee = (Employee) obj;
    }
}
