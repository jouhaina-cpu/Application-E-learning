package com.example.gestionformation.Services;

import java.util.List;

import com.example.gestionformation.Entities.User;
import com.example.gestionformation.payload.response.MessageResponse;

public interface UserInterface {
	
	public MessageResponse save(User user) ;
	public MessageResponse update(Long Id, User newuser);
	
	public MessageResponse delete(Long id);
	public List<User> findAll();
	public User findById(Long id);

}
