package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Formateur;
import com.example.gestionformation.payload.response.MessageResponse;

public interface FormateurInterface {

	public List<Formateur> FindAll() ;
	public Formateur FindByID(Long id);
	public MessageResponse Save(Formateur formateur,Long IdOrganisme);
	public MessageResponse deleteFormateur(Long id);
	public MessageResponse updateFormateur(Long formateurId,Formateur newFormateur);
}
