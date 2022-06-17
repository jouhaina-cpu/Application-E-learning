package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Participant;
import com.example.gestionformation.payload.response.MessageResponse;

public interface ParticipantInterface {

	public List<Participant> FindAll();
	public Participant FindById(Long id);
	public MessageResponse save(Participant participant, Long IdProfil, Long IdPays);
	public MessageResponse deleteParticipant(Long id);
	public MessageResponse updateParticipant(Long participantId, Participant Newparticipant);
}
