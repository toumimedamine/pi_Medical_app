package com.pi.projet.Services;

import com.pi.projet.Entities.Pharmacie;
import com.pi.projet.Repositories.PharmacieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacieServiceImpl implements IPharmacieService {

    @Autowired
    private PharmacieRepository pharmacieRepository;

    @Override
    public Pharmacie addPharmacie(Pharmacie pharmacie) {
        return pharmacieRepository.save(pharmacie);
    }

    @Override
    public Pharmacie updatePharmacie(Pharmacie pharmacie) {
        return pharmacieRepository.save(pharmacie);
    }

    @Override
    public void deletePharmacie(Long idPharmacie) {
        pharmacieRepository.deleteById(idPharmacie);
    }

    @Override
    public Pharmacie getPharmacieById(Long idPharmacie) {
        return pharmacieRepository.findById(idPharmacie).orElse(null);
    }

    @Override
    public List<Pharmacie> getAllPharmacies() {
        return pharmacieRepository.findAll();
    }
}
