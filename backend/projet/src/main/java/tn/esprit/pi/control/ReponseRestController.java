package tn.esprit.pi.control;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.pi.entity.Rendezvous;
import tn.esprit.pi.entity.Reponse;
import tn.esprit.pi.service.IReponseService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/reponse")
@CrossOrigin(origins = "http://localhost:4200")
public class ReponseRestController {
    public IReponseService reponseService;


    // Endpoint to retrieve all blocs
    // Example: GET http://localhost:8089/tpfoyer/bloc/retrieve-all-blocs
    @GetMapping("/retrieve-all-reponse")
    public List<Reponse> getReponse() {
        return reponseService.retrieveAllReponse();
    }

    // Endpoint to retrieve a specific bloc by ID
    // Example: GET http://localhost:8089/tpfoyer/bloc/retrieve-bloc/1
    @GetMapping("/retrieve-reponse/{reponse-id}")
    public Reponse retrieveReponse(@PathVariable("reponse-id") Long idReponse) {
        return reponseService.retrieveReponse(idReponse);
    }

    // Endpoint to add a new bloc
    // Example: POST http://localhost:8089/tpfoyer/bloc/add-bloc
    @PostMapping("/add-reponse")
    public Reponse addRendezvous(@RequestBody Reponse reponse) {
        return reponseService.addReponse(reponse);
    }

    // Endpoint to remove a bloc by ID
    // Example: DELETE http://localhost:8089/tpfoyer/bloc/remove-bloc/1
    @DeleteMapping("/remove-reponse/{reponse-id}")
    public void removeReponse(@PathVariable("reponse-id") Long idReponse) {
        reponseService.removeReponse(idReponse);
    }

    // Endpoint to modify an existing bloc
    // Example: PUT http://localhost:8089/tpfoyer/bloc/modify-bloc
    @PutMapping("/modify-reponse")
    public Reponse modifyReponse(@RequestBody Reponse reponse) {
        return reponseService.modifyReponse(reponse);
    }
}
