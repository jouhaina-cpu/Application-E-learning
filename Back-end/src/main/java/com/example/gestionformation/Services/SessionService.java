package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.Formateur;
import com.example.gestionformation.Entities.Formation;
import com.example.gestionformation.Entities.Session;
import com.example.gestionformation.Repositories.FormateurRepository;
import com.example.gestionformation.Repositories.FormationRepository;
import com.example.gestionformation.Repositories.OrganismeRepository;
import com.example.gestionformation.Repositories.SessionRepository;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class SessionService implements SessionInterface{

        private final SessionRepository   sessionRepository;
        private final FormateurRepository formateurRepository;
        private final FormationRepository formationRepository;

        @Autowired
        public SessionService(SessionRepository sessionRepository, OrganismeRepository organismeRepository, FormateurRepository formateurRepository,FormationRepository formationRepository) {
            this.sessionRepository = sessionRepository;
            this.formateurRepository=formateurRepository;
            this.formationRepository=formationRepository;
           
        }

        @Override
        public List<Session> FindAll() {
            return sessionRepository.findAll();
        }


    	@Override
    	public Session findById(Long id) {
    		Session session = sessionRepository.findById(id).orElse(null);
    		return session;
    	}

     	@Override
        public MessageResponse save(Session session, Long IdFormateur, Long IdFormation) {
        
    	
    		Formateur formateur = formateurRepository.findById(IdFormateur).orElse(null);
    		session.setFormateur(formateur);
    		
    		Formation formation = formationRepository.findById(IdFormation).orElse(null);
    		session.setFormation(formation);
    	    sessionRepository.save(session);
    	    
    		return new MessageResponse(true, "Succès", "Session de formation ajouté avec succès.");
    	}
    	
     	@Override
        public MessageResponse DeleteSession(Long id) {
        	
        		Session session = findById(id);
        		if (session == null) {
        			return new MessageResponse(false, "Echec", "session n'existe pas !");
        		}
        		sessionRepository.delete(session);
        		return new MessageResponse(true, "Succès", "session a été supprimé avec succès.");
     	}

     	@Override
        public MessageResponse updateSession(Long sessionId, Session newSession) {
        	 boolean existe = sessionRepository.existsById(sessionId);
             if (!existe){
                 return new MessageResponse(false,"Echec !","Session de formation n'existe pas !");

             }
             newSession.setId(sessionId);
             sessionRepository.save(newSession);
             return new MessageResponse(true,"Succès","Opération réalisée avec succès.");

        }

 }
