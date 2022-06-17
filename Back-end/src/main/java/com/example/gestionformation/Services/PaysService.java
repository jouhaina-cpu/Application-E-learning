package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.Pays;
import com.example.gestionformation.Repositories.PaysRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PaysService implements PaysInterface{

    private final PaysRepository paysRepository;

    @Autowired
    public PaysService(PaysRepository paysRepository) {
        this.paysRepository = paysRepository;
    }

    @Override
    public List<Pays> FindAll() {
        return paysRepository.findAll();

    }
    
    @Override
    public Pays FindById(Long id) {
    	Pays pays = paysRepository.findById(id).orElse(null);
        return pays;
    }

    @Override
    public MessageResponse save(Pays pays) {
        paysRepository.save(pays);
        return new MessageResponse(true,"Succès","pays ajoutée avec succès.");
    }

    @Override
    public MessageResponse deletePays(Long paysId) {
        
        Pays pays = FindById(paysId);
        if (pays==null){
            return new MessageResponse(false,"Echec","Cet enregistrement n'existe pas !");
        }
        paysRepository.delete(pays);
        return new MessageResponse(true,"Succès", "L'enregistrement a été supprimé avec succès.");

    }

    public MessageResponse updatePays(Long paysId, Pays NewPays) {
        boolean existe = paysRepository.existsById(paysId);
        if (!existe){
            return new MessageResponse(false,"Echec !","Opération non réalisée !");

        }
        NewPays.setId(paysId);
        paysRepository.save(NewPays);
        return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
    }

}

