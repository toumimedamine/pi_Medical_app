package com.pi.projet.service;

import com.pi.projet.entity.Rendezvous;

import java.util.List;

public interface IRendezvousService {
    List<Rendezvous> retrieveAllRendezvous();
    Rendezvous retrieveRendezvous(Long idRendezvous);
    Rendezvous addRendezvous(Rendezvous rendezvous);
    void removeRendezvous(Long idRendezvous);
    Rendezvous modifyRendezvous(Rendezvous rendezvous);
}
