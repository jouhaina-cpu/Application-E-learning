package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.Domaine;
import com.example.gestionformation.Repositories.DomaineRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DomaineService implements DomaineInterface{

        private final DomaineRepository domaineRepository;

        @Autowired
        public DomaineService(DomaineRepository domaineRepository) {
            this.domaineRepository = domaineRepository;
        }


        @Override
        public List<Domaine> FindAll() {
            return domaineRepository.findAll();
        }

        @Override
        public Domaine FindById(Long id) {
        	Domaine domaine = domaineRepository.findById(id).orElse(null);
            return domaine;
        }

        @Override
        public MessageResponse save(Domaine domaine) {
            
            boolean existe = domaineRepository.existsByLibelle(domaine.getLibelle());
            if (existe){
                return new MessageResponse(false,"Echec !","Cette domaine existe déja !");
            }
            domaineRepository.save(domaine);
            return new MessageResponse(true,"Succès","Opération réalisée avec succès.");

        }

        @Override
        public MessageResponse deleteDomaine(Long id) {
           
            Domaine domaine = FindById(id);
            if (domaine==null){
                return new MessageResponse(false,"Echec","Cet enregistrement n'existe pas !");
            }
            domaineRepository.delete(domaine);
            return new MessageResponse(true,"Succès", "L'enregistrement a été supprimé avec succès.");

        }

        @Override
        public MessageResponse updateDomaine(Long domaineId, Domaine domaine) {
            
            boolean existe = domaineRepository.existsById(domaineId);
            if (!existe){
                return new MessageResponse(false,"Echec !","Opération non réalisée !");

            }
            domaine.setId(domaineId);
            domaineRepository.save(domaine);
            return new MessageResponse(true,"Succès","Opération réalisée avec succès.");
        }

}
