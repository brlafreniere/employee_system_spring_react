package io.blainelafreniere.employeesystem.controllers;

import io.blainelafreniere.employeesystem.entities.Employee;
import io.blainelafreniere.employeesystem.exceptions.EmployeeNotFoundException;
import io.blainelafreniere.employeesystem.repositories.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    List<Employee> all() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    Employee show(@PathVariable(value="id") Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @PostMapping
    Employee createEmployee(@RequestBody Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }

    @DeleteMapping("/{id}")
    Employee deleteEmployee(@PathVariable(value="id") Long id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        employeeRepository.delete(employee);
        return employee;
    }
}
