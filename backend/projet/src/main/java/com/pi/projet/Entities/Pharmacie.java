package com.pi.projet.Entities;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Pharmacie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPharmacie;

    private String nom;
    private String adresse;
    private String telephone;
    private String email;

    @Enumerated(EnumType.STRING)
    private TypePharm typePharm;

    @OneToMany(mappedBy = "pharmacie", cascade = CascadeType.ALL)
    private List<Stock> stocks;

}

