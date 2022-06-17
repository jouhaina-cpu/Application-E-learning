package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Pays;
import com.example.gestionformation.Services.PaysService;
import com.example.gestionformation.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/pays")
public class PaysController {

    private final PaysService paysService;

    @Autowired
    public PaysController(PaysService paysService) {
        this.paysService = paysService;
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping
    public List<Pays> FindAll(){
        return paysService.FindAll();
    }
    
    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping(path="{paysId}")
    public Pays FindById(@PathVariable("paysId") Long paysId){
        return paysService.FindById(paysId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public MessageResponse save(@RequestBody Pays pays){
    	return paysService.save(pays);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping(path="{paysId}")
    public MessageResponse deletePays(@PathVariable("paysId") Long paysId){
        return paysService.deletePays(paysId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping(path="{paysId}")
    public MessageResponse updatePays(
            @PathVariable("paysId") Long paysId,
            @RequestBody Pays Newpays) {
    	return paysService.updatePays(paysId, Newpays);

    }



}
