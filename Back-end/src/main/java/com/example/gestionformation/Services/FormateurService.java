package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.Formateur;
import com.example.gestionformation.Entities.Organisme;
import com.example.gestionformation.Repositories.FormateurRepository;
import com.example.gestionformation.Repositories.OrganismeRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FormateurService implements FormateurInterface{

    private final FormateurRepository formateurRepository;

    private final OrganismeRepository organismeRepository;

    @Autowired
    public FormateurService(FormateurRepository formateurRepository,OrganismeRepository organismeRepository) {
        this.formateurRepository = formateurRepository;
        this.organismeRepository=organismeRepository;
    }
    
    @Override
    public List<Formateur> FindAll() {
        return formateurRepository.findAll();
    }

    @Override
    public Formateur FindByID(Long id) {
        Formateur formateur = formateurRepository.findById(id).orElse(null);
        return formateur;
    }
    
    @Override
    public MessageResponse Save(Formateur formateur,Long IdOrganisme) {
     
	    Organisme org = organismeRepository.findById(IdOrganisme).orElse(null);
	    formateur.setOrganisme(org);
	    
	    formateurRepository.save(formateur);
	    return new MessageResponse(true,"Succès","Formateur ajouté avec succès.");

    }
    

    @Override
    public MessageResponse deleteFormateur(Long id) {
    	Formateur formateur= FindByID(id);
        if(formateur==null)
        {
        	 return new MessageResponse(false,"Echec","formateur n'existe pas !");
        }
        formateurRepository.delete(formateur);
	    return new MessageResponse(true,"Succès", "formateur a été supprimé avec succès.");

    }

	
    @Override
    public MessageResponse updateFormateur(Long IdFormateur,Formateur newFormateur) {
       
    	Formateur formateur = formateurRepository.findById(IdFormateur).orElse(null);
	    if (formateur==null){
	        return new MessageResponse(false,"Echec !","formateur n'existe pas !");
	    }
	   
	    newFormateur.setId(IdFormateur);
	    formateurRepository.save(newFormateur);
	    return new MessageResponse(true,"Succès","Formateur modifié avec succès.");
    }



}

