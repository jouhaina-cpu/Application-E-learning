package com.example.gestionformation.Controller;

import com.example.gestionformation.Entities.Session;
import com.example.gestionformation.Services.SessionService;
import com.example.gestionformation.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/session")
public class SessionController {
    private final SessionService sessionService;

    @Autowired
    public SessionController(SessionService sessionService){ this.sessionService=sessionService; }


    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping
    public List<Session> FindAll(){
        return sessionService.FindAll();
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping(path = "{sessionId}")
    public Session FindById(@PathVariable Long sessionId) {
        return sessionService.findById(sessionId);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PostMapping(path = "{formateurId}/{formationId}")
    public MessageResponse save(@Valid @RequestBody Session session,@PathVariable Long formateurId,@PathVariable Long formationId){
        return sessionService.save(session,formateurId,formationId);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @DeleteMapping("{id}")
    public MessageResponse DeleteSession(@PathVariable Long id) {
        return sessionService.DeleteSession(id);
    }

    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping(path="{sessionId}")
    public MessageResponse updateSession( @PathVariable("sessionId") Long sessionId, @RequestBody Session Newsession ){
    	return sessionService.updateSession(sessionId, Newsession);
    }

}
