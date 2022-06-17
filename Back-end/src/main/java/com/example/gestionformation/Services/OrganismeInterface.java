package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Organisme;
import com.example.gestionformation.payload.response.MessageResponse;

public interface OrganismeInterface {
	
	public List<Organisme> FindAll() ;
	public Organisme FindById(Long id);
	public MessageResponse Save(Organisme organisme);
	public MessageResponse deleteOrganisme(Long id);
	public MessageResponse updateOrganisme(Long organismeId,Organisme newOrganisme);

}
