package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Profile;
import com.example.gestionformation.payload.response.MessageResponse;

public interface ProfileInterface {

	 public List<Profile> FindALL();
	 public MessageResponse save(Profile profile);
	 public Profile findById(Long id);
	 public MessageResponse deleteProfile(Long profileId);
	 public MessageResponse updateProfile(Long profileId, Profile NewProfil);
	 
}
