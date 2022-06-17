package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Organisme;
import com.example.gestionformation.Services.OrganismeService;
import com.example.gestionformation.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/organisme")
public class OrganismeController {
    private final OrganismeService organismeService;

    @Autowired
    public OrganismeController(OrganismeService organismeService){
        this.organismeService=organismeService;
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping
    public List<Organisme> FindAll(){
        return organismeService.FindAll();
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping("{organismeId}")
    Organisme FindById(@PathVariable Long organismeId) {
        return organismeService.FindById(organismeId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public  MessageResponse Save(@Valid @RequestBody Organisme organisme)
    {   return organismeService.Save(organisme);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("{organismeId}")
    public MessageResponse deleteOrganisme(@PathVariable Long organismeId) { return deleteOrganisme(organismeId); }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("{organismeId}")
    public MessageResponse updateOrganisme( @PathVariable("organismeId") Long organismeId,
                                 @RequestBody Organisme NewOrganisme
    ){ return organismeService.updateOrganisme(organismeId, NewOrganisme); }
}



