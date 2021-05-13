package io.blainelafreniere.employeesystem.controllers;

import io.blainelafreniere.employeesystem.entities.Department;
import io.blainelafreniere.employeesystem.entities.Employee;
import io.blainelafreniere.employeesystem.exceptions.DepartmentNotFoundException;
import io.blainelafreniere.employeesystem.repositories.DepartmentRepository;
import io.blainelafreniere.employeesystem.repositories.EmployeeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.naming.Binding;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/departments")
public class DepartmentController {
    private final DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @GetMapping
    List<Department> all() {
        return departmentRepository.findAll();
    }

    @GetMapping("/{id}")
    Department show(@PathVariable(value="id") Long id) {
        return departmentRepository.findById(id).orElseThrow(() -> new DepartmentNotFoundException(id));
    }

    @PostMapping
    Department createDepartment(@RequestBody Department newDepartment, BindingResult bindingResult) {
        // this appears to throw a ConstraintViolationException
        if (bindingResult.hasErrors()) { }

        return departmentRepository.save(newDepartment);
    }

    @PutMapping("/{id}")
    Department updateDepartment(@Valid @RequestBody Department newDepartment, @PathVariable Long id) {
        return departmentRepository.findById(id)
            .map(department -> {
                department.setName(newDepartment.getName());
                return departmentRepository.save(department);
            }).orElseGet(() -> {
                newDepartment.setId(id);
                return departmentRepository.save(newDepartment);
            });
    }

    @DeleteMapping("/{id}")
    void deleteDepartment(@PathVariable(value="id") Long id) {
        departmentRepository.deleteById(id);
    }
}
