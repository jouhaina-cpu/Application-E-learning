package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Formation;
import com.example.gestionformation.Services.FormationService;
import com.example.gestionformation.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/formation")
public class FormationController {

        private final FormationService formationService;

        @Autowired
        public FormationController(FormationService formationService){
            this.formationService=formationService;
        }

        @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
        @GetMapping
        public List<Formation> FindAll(){
            return formationService.FindAll();
        }

        @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
        @GetMapping("{formationId}")
        Formation FindById(@PathVariable Long formationId) {
            return formationService.FindById(formationId);
        }

        @PreAuthorize("hasAnyRole('ROLE_USER')")
        @PostMapping("{domaineId}")
        public MessageResponse save(@Valid @RequestBody Formation formation,@PathVariable Long domaineId)
        {   return formationService.Save(formation,domaineId);
        }

        @PreAuthorize("hasAnyRole('ROLE_USER')")
        @DeleteMapping("{formationId}")
        public MessageResponse deleteFormation(@PathVariable Long formationId) 
        { return formationService.deleteFormation(formationId); }

        @PreAuthorize("hasAnyRole('ROLE_USER')")
        @PutMapping("{formationId}")
        public MessageResponse updateFormation( @PathVariable("formationId") Long formationId,@RequestBody Formation NewFormation)
        { return formationService.updateFormation(formationId,NewFormation); }
}
