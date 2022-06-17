package com.example.gestionformation.Repositories;

import com.example.gestionformation.Entities.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur, Long> {
    Boolean findByEmail(String email);
}
