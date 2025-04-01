package com.pi.projet.service;

import com.pi.projet.entity.Rendezvous;
import com.pi.projet.repository.RendezvousRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RendezvousServiceImpl implements IRendezvousService {
    public RendezvousRepository rendezvousRepository;

    // Retrieve all rendezvous
    public List<Rendezvous> retrieveAllRendezvous() {
        return rendezvousRepository.findAll();
    }

    // Retrieve a specific rendezvous by its ID
    public Rendezvous retrieveRendezvous(Long idRendezvous) {
        return rendezvousRepository.findById(idRendezvous)
                .orElseThrow(() -> new RuntimeException("Rendez-vous non trouvé avec l'ID : " + idRendezvous));
    }

    @Transactional
    public Rendezvous addRendezvous(Rendezvous rendezvous) {
        return rendezvousRepository.save(rendezvous);
    }

    // Remove a rendezvous by its ID
    public void removeRendezvous(Long idRendezvous) {
        rendezvousRepository.deleteById(idRendezvous);
    }

    // Modify an existing rendezvous
    public Rendezvous modifyRendezvous(Rendezvous rendezvous) {
        return rendezvousRepository.save(rendezvous);
    }

}
