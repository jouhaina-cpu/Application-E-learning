package com.example.gestionformation.Services;


import com.example.gestionformation.Entities.Participant;
import com.example.gestionformation.Entities.Pays;
import com.example.gestionformation.Entities.Profile;
import com.example.gestionformation.Repositories.ParticipantRepository;
import com.example.gestionformation.Repositories.PaysRepository;
import com.example.gestionformation.Repositories.ProfileRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ParticipantService implements ParticipantInterface{
    private final ParticipantRepository participantRepository;
    private final ProfileRepository profilRepository;
    private final PaysRepository paysRepository;
   

    @Autowired
    public ParticipantService(ParticipantRepository participantRepository,ProfileRepository profilRepository,PaysRepository paysRepository ) {
        this.participantRepository = participantRepository;
        this.profilRepository = profilRepository;
        this.paysRepository = paysRepository;
    }
    
    @Override
    public List<Participant> FindAll(){
        return participantRepository.findAll();
    }

    @Override
    public Participant FindById(Long id) {
        Participant participant = participantRepository.findById(id).orElse(null);
		return participant;
    }

    @Override
    public MessageResponse save(Participant participant, Long IdProfil, Long IdPays) {

		Profile profil = profilRepository.findById(IdProfil).orElse(null);
		participant.setProfil(profil);
		
		Pays pays = paysRepository.findById(IdPays).orElse(null);
		participant.setPays(pays);
		participantRepository.save(participant);
		return new MessageResponse(true, "Succès", "Session de formation ajouté avec succès.");
	}

    @Override
    public MessageResponse deleteParticipant(Long id)
    {
        Participant participant = FindById(id);
		if (participant == null) {
			return new MessageResponse(false, "Echec", "Ce participant n'existe pas !");
		}
		participantRepository.delete(participant);
		return new MessageResponse(true, "Succès", "Le participant a été supprimé avec succès.");
    }

    @Override
    public MessageResponse updateParticipant(Long participantId, Participant Newparticipant) {
    	Participant participant = participantRepository.findById(participantId).orElse(null);
	    if (participant==null){
	        return new MessageResponse(false,"Echec !","Participant n'existe pas !");
	    }
	   
	    Newparticipant.setId(participantId);
	    participantRepository.save(Newparticipant);
	    return new MessageResponse(true,"Succès","Participant modifié avec succès.");
    }



}


