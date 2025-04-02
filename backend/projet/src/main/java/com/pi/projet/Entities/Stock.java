package com.pi.projet.Entities;

import jakarta.persistence.*;

@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idStock;

    private int idMedicament;

    private int quantite;

    @ManyToOne
    @JoinColumn(name = "id_pharmacie")
    private Pharmacie pharmacie;

    // Getters, Setters
}

