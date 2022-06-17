package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.Domaine;
import com.example.gestionformation.Entities.Formation;
import com.example.gestionformation.Repositories.DomaineRepository;
import com.example.gestionformation.Repositories.FormationRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FormationService implements FormationInterface{
    private final FormationRepository formationRepository;
    private final DomaineRepository domaineRepository;

    @Autowired
    public FormationService(FormationRepository formationRepository, DomaineRepository domaineRepository) {
        this.formationRepository = formationRepository;
        this.domaineRepository=domaineRepository;
    }

    @Override
    public List<Formation> FindAll() {
        return formationRepository.findAll();
    }

    @Override
    public Formation FindById(Long id) {
        Formation formateur = formationRepository.findById(id).orElse(null);
        return formateur;
    }

    @Override
    public MessageResponse Save(Formation formation,Long IdDomaine) {
     
	    Domaine d = domaineRepository.findById(IdDomaine).orElse(null);
	    formation.setDomain(d);
	    
	    formationRepository.save(formation);
	    return new MessageResponse(true,"Succès","Formation ajouté avec succès.");

    }

    @Override
    public MessageResponse deleteFormation(Long id) {
    	Formation formation= FindById(id);
        if(formation==null)
        {
        	 return new MessageResponse(false,"Echec","formation n'existe pas !");
        }
        formationRepository.delete(formation);
	    return new MessageResponse(true,"Succès", "formation a été supprimé avec succès.");

    }

	
    @Override
    public MessageResponse updateFormation(Long IdFormation,Formation newformation) {
       
    	Formation formation = formationRepository.findById(IdFormation).orElse(null);
	    if (formation==null){
	        return new MessageResponse(false,"Echec !","Formation n'existe pas !");
	    }
	   
	    newformation.setId(IdFormation);
	    formationRepository.save(newformation);
	    return new MessageResponse(true,"Succès","Formation modifié avec succès.");
    }


}
