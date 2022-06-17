package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Domaine;
import com.example.gestionformation.Services.DomaineService;
import com.example.gestionformation.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/domaine")
public class DomaineController {
    
	private final DomaineService domaineService;
    @Autowired
    public DomaineController(DomaineService domainService) 
    {
        this.domaineService = domainService;
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping
    public List<Domaine> FindAll()
    {
        return domaineService.FindAll();
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping(path="{domainId}")
    public Domaine FindById(@PathVariable("domainId") Long domainId)
    {
        return domaineService.FindById(domainId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public MessageResponse save(@RequestBody Domaine domain)
    {
        return domaineService.save(domain);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping(path="{domainId}")
    public MessageResponse deleteDomaine(@PathVariable("domainId") Long domainId)
    {
        return domaineService.deleteDomaine(domainId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping(path="{domainId}")
    public MessageResponse updateDomaine(@PathVariable("domainId") Long domainId,@RequestBody Domaine Newdomaine)
    {
        return domaineService.updateDomaine(domainId, Newdomaine);
    }

}

