package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Pays;
import com.example.gestionformation.payload.response.MessageResponse;

public interface PaysInterface {

	 public List<Pays> FindAll() ;
	 public MessageResponse save(Pays pays);
	 public MessageResponse deletePays(Long paysId) ;
	 public Pays FindById(Long id);
	 public MessageResponse updatePays(Long paysId, Pays NewPays);
}
