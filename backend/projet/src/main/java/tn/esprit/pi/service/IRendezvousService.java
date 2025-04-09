package tn.esprit.pi.service;

import tn.esprit.pi.entity.Rendezvous;

import java.util.List;

public interface IRendezvousService {
    List<Rendezvous> retrieveAllRendezvous();
    Rendezvous retrieveRendezvous(Long idRendezvous);
    Rendezvous addRendezvous(Rendezvous rendezvous);
    void removeRendezvous(Long idRendezvous);
    Rendezvous modifyRendezvous(Rendezvous rendezvous);
}
