package com.example.gestionformation.Services;


import com.example.gestionformation.Entities.Organisme;
import com.example.gestionformation.Repositories.OrganismeRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class OrganismeService implements OrganismeInterface{

    private final OrganismeRepository organismeRepository;
    @Autowired
    public OrganismeService(OrganismeRepository organismeRepository) {
        this.organismeRepository= organismeRepository;
    }

    @Override
    public List<Organisme> FindAll() {
        return organismeRepository.findAll();
    }

    @Override
    public Organisme FindById(Long id) {
    	Organisme organisme = organismeRepository.findById(id).orElse(null);
        return organisme;
    }
    @Override
    public MessageResponse Save(Organisme organisme) {

        organismeRepository.save(organisme);

        return new MessageResponse(true, "Succès", "Opération réalisée avec succès.");
    }

    @Override
    public MessageResponse deleteOrganisme(Long id) {
        Organisme organisme = FindById(id);
        if(organisme==null)
        {
        	 return new MessageResponse(false,"Echec","organisme n'existe pas !");
        }
        organismeRepository.delete(organisme);
	    return new MessageResponse(true,"Succès", "organisme a été supprimé avec succès.");

    }

    @Override
    public MessageResponse updateOrganisme(Long organismeId,Organisme newOrganisme) {
   
        Organisme organisme = organismeRepository.findById(organismeId).orElse(null);
	    if (organisme==null){
	        return new MessageResponse(false,"Echec !","Organisme n'existe pas !");
	    }
	   
	    newOrganisme.setId(organismeId);
	    organismeRepository.save(newOrganisme);
	    return new MessageResponse(true,"Succès","Organisme modifié avec succès.");
    }

}
