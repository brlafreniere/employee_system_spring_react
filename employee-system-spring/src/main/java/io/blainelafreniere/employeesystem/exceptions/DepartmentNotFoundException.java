package io.blainelafreniere.employeesystem.exceptions;

public class DepartmentNotFoundException extends RuntimeException {
    public DepartmentNotFoundException(Long id) {
        super("Could not find department with id: " + id);
    }
}
