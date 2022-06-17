package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.Session;
import com.example.gestionformation.payload.response.MessageResponse;

public interface SessionInterface {
	public List<Session> FindAll() ;
	public Session findById(Long id);
    public MessageResponse save(Session session, Long IdFormateur, Long IdFormation);
    public MessageResponse DeleteSession(Long id) ;
    public MessageResponse updateSession(Long sessionId, Session newSession) ;
    	

}
