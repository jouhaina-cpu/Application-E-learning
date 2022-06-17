package com.example.gestionformation.Entities;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @NotNull
    private String nom;

    @NotBlank
    @NotNull
    private String prenom;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String telephone;

    @Enumerated(EnumType.STRING)
    private EnumParticipant type;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="profile_id")
    Profile profil;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="country_id")
    Pays pays;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinTable(name="participant_session",
            joinColumns = @JoinColumn(name="participant_id"), inverseJoinColumns = @JoinColumn(name="session_id"))
    private Set<Session> sessions;
   
}



