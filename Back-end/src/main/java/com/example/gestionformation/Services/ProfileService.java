package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.Profile;
import com.example.gestionformation.Repositories.ProfileRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProfileService implements ProfileInterface {

    private final ProfileRepository profileRepository;

    @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public List<Profile> FindALL(){
        return profileRepository.findAll();
    }

    @Override
	public Profile findById(Long id) {
		Profile profile = profileRepository.findById(id).orElse(null);
		return profile;
	}

    
    @Override
    public MessageResponse save(Profile profile) {
      
		profileRepository.save(profile);
		return new MessageResponse(true, "Succès", "Opération réalisée avec succès.");
    }

    @Override
    public MessageResponse deleteProfile(Long profileId) {
        Profile profile = findById(profileId);
		if (profile == null) {
			return new MessageResponse(false, "Echec", "Cet enregistrement n'existe pas !");
		}
		profileRepository.delete(profile);
		return new MessageResponse(true, "Succès", "L'enregistrement a été supprimé avec succès.");

    }

    @Override
    public MessageResponse updateProfile(Long profileId, Profile NewProfil) {
            boolean existe = profileRepository.existsById(profileId);
            if (!existe){
                return new MessageResponse(false,"Echec !","Profil n'existe pas !");

            }
            NewProfil.setId(profileId);
            profileRepository.save(NewProfil);
            return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
    }

}