package tn.esprit.pi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.pi.entity.Rendezvous;

@Repository
public interface RendezvousRepository extends JpaRepository<Rendezvous, Long> {
}
