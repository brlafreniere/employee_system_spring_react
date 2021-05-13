package io.blainelafreniere.employeesystem.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class Department {
    @Id @GeneratedValue private Long id;
    private String name;

    @OneToMany(mappedBy="department")
    private Set<Employee> employees;
}
