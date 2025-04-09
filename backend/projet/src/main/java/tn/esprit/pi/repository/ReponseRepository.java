package tn.esprit.pi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.pi.entity.Reponse;

public interface ReponseRepository extends JpaRepository<Reponse, Long> {
}
