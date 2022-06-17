package com.example.gestionformation.Services;

import com.example.gestionformation.Entities.User;
import com.example.gestionformation.Repositories.UserRepository;
import com.example.gestionformation.payload.response.MessageResponse;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService,UserInterface {
	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}


	@Transactional
	@Override
	public MessageResponse save(User user) {
		boolean existe = userRepository.existsByEmail(user.getEmail());
		if (existe) {
			return new MessageResponse(false, "Echec !", "Cet utilisateur existe déja !");
		}
		userRepository.save(user);
		return new MessageResponse(true, "Succès", "Utilisateur ajouté avec succès.");
	}

	@Transactional
	@Override
	public MessageResponse update(Long Id, User newuser) {
		Optional<User> existe = userRepository.findById(Id);
		if (existe==null) {
			return new MessageResponse(false, "Echec !", "Opération non réalisée !");

		}
		newuser.setId(Id);
		userRepository.save(newuser);
		return new MessageResponse(true, "Succès", "Opération réalisée avec succès.");
	}

	@Transactional
	@Override
	public MessageResponse delete(Long id) {
		User user = findById(id);
		if (user == null) {
			return new MessageResponse(false, "Echec", "Cet utilisateur n'existe pas !");
		}
		userRepository.delete(user);
		return new MessageResponse(true, "Succès", "L'utilisateur a été supprimé avec succès.");
	}

	@Override
	public List<User> findAll() {

		return userRepository.findAll();
	}

	@Override
	public User findById(Long id) {

		User user = userRepository.findById(id).orElse(null);
		return user;
	}
}

