package tn.esprit.pi.service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.pi.entity.Reponse;
import tn.esprit.pi.repository.ReponseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
@Service
@AllArgsConstructor

public class ReponseServiceImpl implements IReponseService {
    public ReponseRepository reponseRepository;

    // Retrieve all blocs
    public List<Reponse> retrieveAllReponse() {
        return reponseRepository.findAll();
    }

    // Retrieve a specific bloc by its ID
    public Reponse retrieveReponse(Long idReponse) {
        return reponseRepository.findById(idReponse)
                .orElseThrow(() -> new RuntimeException("Réponse non trouvée avec l'ID : " + idReponse));
    }
    @Transactional
    public Reponse addReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }

    // Remove a bloc by its ID
    public void removeReponse(Long idReponse ) {
        reponseRepository.deleteById(idReponse);
    }

    // Modify an existing bloc
    public Reponse modifyReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }



}
