package com.example.gestionformation.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @NotNull
    private String titre;
    @Enumerated(EnumType.STRING)
    private EnumFormation type;
    @NotNull
    private int annee;
    @NotNull
    private int nb_session;
    @NotNull
    private int duree;
    @NotNull
    private double budget;
    
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="id_domaine")
    private Domaine domain;

   
    @OneToMany(mappedBy="formation")
    @JsonIgnore
    private Set<Session> sessions;


}
