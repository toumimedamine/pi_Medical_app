package com.pi.projet.Services;

import com.pi.projet.Entities.Pharmacie;
import java.util.List;

public interface IPharmacieService {
    Pharmacie addPharmacie(Pharmacie pharmacie);
    Pharmacie updatePharmacie(Pharmacie pharmacie);
    void deletePharmacie(Long idPharmacie);
    Pharmacie getPharmacieById(Long idPharmacie);
    List<Pharmacie> getAllPharmacies();
}
