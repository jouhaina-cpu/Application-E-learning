package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Domaine;
import com.example.gestionformation.payload.response.MessageResponse;

public interface DomaineInterface {
	
	 public List<Domaine> FindAll() ;
	 public Domaine FindById(Long id);
	 public MessageResponse save(Domaine domaine);
	 public MessageResponse deleteDomaine(Long id);
	 public MessageResponse updateDomaine(Long domaineId, Domaine Newdomaine);

}
