package io.blainelafreniere.employeesystem.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Task {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String name;

    @NotNull
    @CreationTimestamp
    private java.sql.Timestamp createdAt;

    @ManyToOne
    private Employee assignedTo;
}
