package io.blainelafreniere.employeesystem.controllers;

import io.blainelafreniere.employeesystem.entities.Department;
import io.blainelafreniere.employeesystem.entities.Employee;
import io.blainelafreniere.employeesystem.exceptions.EmployeeNotFoundException;
import io.blainelafreniere.employeesystem.repositories.EmployeeRepository;
import io.blainelafreniere.employeesystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;
    @Autowired
    private EmployeeService service;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    List<Employee> index() {
        List<Employee> employees = employeeRepository.findAll();
        return employees;
    }

    @GetMapping("/{id}")
    Employee show(@PathVariable(value="id") Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
        return employee;
    }

    @PostMapping
    Employee createEmployee(@Valid @RequestBody Employee newEmployee, BindingResult bindingResult) {
        return employeeRepository.save(newEmployee);
    }

    @PutMapping("/{id}")
    Employee updateEmployee(@Valid @RequestBody Employee newEmployee, @PathVariable Long id) {
        return service.updateEmployee(id, newEmployee);
    }

    @DeleteMapping("/{id}")
    Employee deleteEmployee(@PathVariable(value="id") Long id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        employeeRepository.delete(employee);
        return employee;
    }
}
