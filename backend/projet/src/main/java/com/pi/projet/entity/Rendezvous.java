package com.pi.projet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Rendezvous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRendezvous;
    private String nomPatient;
    private LocalDate dateNaissance;
    private LocalDate dateRendezvous;
    private LocalTime heureRendezvous;
    @Enumerated(EnumType.STRING)
    private SexePatient sexePatient;
    @Enumerated(EnumType.STRING)
    @Column(updatable = false) // Bloque la modification directe en SQL
    private StatutRendezVous statut = StatutRendezVous.EN_ATTENTE;
    protected void setStatut(StatutRendezVous statut) {
        this.statut = statut;

    }
    @OneToOne(mappedBy = "rendezvous")
    private Reponse reponse;
}
