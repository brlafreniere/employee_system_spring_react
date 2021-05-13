package io.blainelafreniere.employeesystem.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @Column(unique = true)
    private String emailAddress;

    @ManyToOne
    @JoinColumn(name="department_id")
    private Department department;

    private String phoneNumber;
}