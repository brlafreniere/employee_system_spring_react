package io.blainelafreniere.employeesystem.repositories;

import io.blainelafreniere.employeesystem.entities.Department;
import io.blainelafreniere.employeesystem.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
