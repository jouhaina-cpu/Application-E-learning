package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.User;
import com.example.gestionformation.Services.UserDetailsServiceImpl;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserDetailsServiceImpl userService;

    @Autowired
    public UserController(UserDetailsServiceImpl userService){
        this.userService=userService;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public List<User> findAll(){return userService.findAll();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(path = "{userId}")
    User findById(@PathVariable Long userId) {
        return userService.findById(userId);
    }
    
    

    @PostMapping
    public MessageResponse save(@Valid @RequestBody User user){
    	return userService.save(user);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("{id}")
    public MessageResponse deleteUser(@PathVariable Long id) {
        return userService.delete(id);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping(path="{userId}")
    public MessageResponse updateUser(
            @PathVariable("userId") Long userId,
            @RequestBody User userUpdate
    ) {
        return userService.update(userId, userUpdate);
        
    }

}
