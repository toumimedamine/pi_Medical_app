package com.pi.projet.Repositories;

import com.pi.projet.Entities.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
}
