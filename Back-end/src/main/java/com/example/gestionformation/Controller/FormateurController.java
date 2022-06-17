package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Formateur;
import com.example.gestionformation.Services.FormateurService;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/formateur")
public class FormateurController {
    private final FormateurService formateurService;

    @Autowired
    public FormateurController(FormateurService formateurService) {
        this.formateurService = formateurService;
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping
    public List<Formateur> FindAll() {
        return formateurService.FindAll();
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping(path = "{formateurId}")
    Formateur FindById(@PathVariable Long formateurId) {
        return formateurService.FindByID(formateurId);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PostMapping("/{codeOrganisme}")
    public MessageResponse save(@Valid @RequestBody Formateur formateur,@PathVariable("codeOrganisme") Long Id) {
        return formateurService.Save(formateur,Id);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @DeleteMapping("{id}")
    public MessageResponse deleteFormateur(@PathVariable Long id) {
       return formateurService.deleteFormateur(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping(path = "{formateurId}")
    public MessageResponse updateFormateur( @PathVariable("formateurId") Long formateurId,@RequestBody Formateur formateur)
    { 
    	return formateurService.updateFormateur(formateurId,formateur);
    }




}
