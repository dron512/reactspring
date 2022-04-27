package com.example.demo.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@ToString
public class Member {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String username;
    private String password;


}
