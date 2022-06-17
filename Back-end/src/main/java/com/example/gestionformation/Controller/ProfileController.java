package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Profile;
import com.example.gestionformation.Services.ProfileService;
import com.example.gestionformation.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/profile")
public class ProfileController {

    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }


    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping
    public List<Profile> FindALL(){
        return profileService.FindALL();
    }
    
    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping(path="{profileId}")
    public Profile FindALL(@PathVariable("profileId") Long profileId){
        return profileService.findById(profileId);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @PostMapping
    public MessageResponse addProfile(@RequestBody Profile profile){
        return profileService.save(profile);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @DeleteMapping(path="{profileId}")
    public MessageResponse deleteProfile(@PathVariable("profileId") Long profileId){
    	return profileService.deleteProfile(profileId);
    }


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping(path="{profileId}")
    public MessageResponse updateProfile( @PathVariable("profileId") Long profileId, @RequestBody Profile profileUpdate) {
    	return profileService.updateProfile(profileId, profileUpdate);

    }

}
