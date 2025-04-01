package com.pi.projet.control;

import com.pi.projet.entity.Rendezvous;
import com.pi.projet.service.IRendezvousService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/rendezvous")
public class RendezvousRestController {
    public IRendezvousService rendezvousService;
    // Endpoint to retrieve all blocs
    // Example: GET http://localhost:8089/tpfoyer/bloc/retrieve-all-blocs
    @GetMapping("/retrieve-all-rendezvous")
    public List<Rendezvous> getRendezvous() {
        return rendezvousService.retrieveAllRendezvous();
    }

    // Endpoint to retrieve a specific bloc by ID
    // Example: GET http://localhost:8089/tpfoyer/bloc/retrieve-bloc/1
    @GetMapping("/retrieve-rendezvous/{rendezvous-id}")
    public Rendezvous retrieveRendezvous(@PathVariable("rendezvous-id") Long idRendezvous) {
        return rendezvousService.retrieveRendezvous(idRendezvous);
    }

    // Endpoint to add a new bloc
    // Example: POST http://localhost:8089/tpfoyer/bloc/add-bloc
    @PostMapping("/add-rendezvous")
    public Rendezvous addRendezvous(@RequestBody Rendezvous rendezvous) {
        return rendezvousService.addRendezvous(rendezvous);
    }

    // Endpoint to remove a bloc by ID
    // Example: DELETE http://localhost:8089/tpfoyer/bloc/remove-bloc/1
    @DeleteMapping("/remove-rendezvous/{rendezvous-id}")
    public void removeRendezvous(@PathVariable("rendezvous-id") Long idRendezvous) {
        rendezvousService.removeRendezvous(idRendezvous);
    }

    // Endpoint to modify an existing bloc
    // Example: PUT http://localhost:8089/tpfoyer/bloc/modify-bloc
    @PutMapping("/modify-rendezvous")
    public Rendezvous modifyRendezvous(@RequestBody Rendezvous rendezvous) {
        return rendezvousService.modifyRendezvous(rendezvous);
    }
}
