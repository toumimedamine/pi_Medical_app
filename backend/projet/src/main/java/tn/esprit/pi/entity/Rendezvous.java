package tn.esprit.pi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

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
    private String heureRendezvous;
    @Enumerated(EnumType.STRING)
    private SexePatient sexePatient;
    @Enumerated(EnumType.STRING)
    @Column // enlever `updatable = false`
    private StatutRendezVous statut = StatutRendezVous.EN_ATTENTE;

    protected void setStatut(StatutRendezVous statut) {
        this.statut = statut;

    }
    @OneToOne(mappedBy = "rendezvous", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Reponse reponse;


}
