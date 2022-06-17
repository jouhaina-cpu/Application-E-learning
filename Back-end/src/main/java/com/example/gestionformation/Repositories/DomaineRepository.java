package com.example.gestionformation.Repositories;

import com.example.gestionformation.Entities.Domaine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomaineRepository extends JpaRepository<Domaine, Long> {
    boolean existsByLibelle(String libelle);
}
