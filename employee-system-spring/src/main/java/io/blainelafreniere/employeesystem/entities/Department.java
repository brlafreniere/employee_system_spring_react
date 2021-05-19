package io.blainelafreniere.employeesystem.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @JsonIgnore
    @OneToMany(fetch=FetchType.LAZY, mappedBy="department")
    private Set<Employee> employees;
}
