package com.example.gestionformation.Repositories;

import com.example.gestionformation.Entities.Profile;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProfileRepository extends JpaRepository<Profile, Long> {
  

}
