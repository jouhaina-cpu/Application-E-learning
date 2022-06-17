package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Formation;
import com.example.gestionformation.payload.response.MessageResponse;

public interface FormationInterface {
	
	public List<Formation> FindAll() ;
	public Formation FindById(Long id);
	public MessageResponse Save(Formation formation,Long IdDomaine);
	public MessageResponse deleteFormation(Long id);
	public MessageResponse updateFormation(Long IdFormation,Formation newformation);

}
