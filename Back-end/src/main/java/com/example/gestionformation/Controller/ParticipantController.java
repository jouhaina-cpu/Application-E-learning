package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Participant;
import com.example.gestionformation.Services.ParticipantService;
import com.example.gestionformation.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/participant")
public class ParticipantController {
    private final ParticipantService participantService;

    @Autowired
    public ParticipantController(ParticipantService participantService){
        this.participantService=participantService;
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping
    public List<Participant> FindAll(){
        return participantService.FindAll();
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping(path = "{participantId}")
    Participant FindById(@PathVariable Long participantId) {
        return participantService.FindById(participantId);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PostMapping(path = "{profilId}/{paysId}")
    public MessageResponse Save(@Valid @RequestBody Participant participant,@PathVariable Long profilId,@PathVariable Long paysId){
    	return participantService.save(participant,profilId,paysId);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @DeleteMapping("{id}")
    public MessageResponse deleteParticipant(@PathVariable Long id) {
    	return participantService.deleteParticipant(id);
    }


    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping(path="{participantId}")
    public MessageResponse updateParticipant(
            @PathVariable("participantId") Long participantId,
            @RequestBody Participant participantUpdate
    ){
    	return participantService.updateParticipant(participantId, participantUpdate);

    }

}
