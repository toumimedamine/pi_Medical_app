package com.pi.projet.Controllers;

import com.pi.projet.Entities.Pharmacie;
import com.pi.projet.Services.IPharmacieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pharmacies")
public class PharmacieController {

    @Autowired
    private IPharmacieService pharmacieService;

    @PostMapping
    public Pharmacie addPharmacie(@RequestBody Pharmacie pharmacie) {
        return pharmacieService.addPharmacie(pharmacie);
    }

    @PutMapping
    public Pharmacie updatePharmacie(@RequestBody Pharmacie pharmacie) {
        return pharmacieService.updatePharmacie(pharmacie);
    }

    @DeleteMapping("/{id}")
    public void deletePharmacie(@PathVariable Long id) {
        pharmacieService.deletePharmacie(id);
    }

    @GetMapping("/{id}")
    public Pharmacie getPharmacieById(@PathVariable Long id) {
        return pharmacieService.getPharmacieById(id);
    }

    @GetMapping
    public List<Pharmacie> getAllPharmacies() {
        return pharmacieService.getAllPharmacies();
    }
}
