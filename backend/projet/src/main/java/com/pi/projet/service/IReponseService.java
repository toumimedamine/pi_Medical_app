package com.pi.projet.service;

import com.pi.projet.entity.Reponse;

import java.util.List;

public interface IReponseService {
    List<Reponse> retrieveAllReponse();
    Reponse retrieveReponse(Long idReponse);
    Reponse addReponse(Reponse reponse);
    void removeReponse(Long idReponse);
    Reponse modifyReponse(Reponse reponse);
}
