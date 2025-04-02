package com.pi.projet.Services;

import com.pi.projet.Entities.Stock;
import java.util.List;

public interface IStockService {
    Stock addStock(Stock stock);
    Stock updateStock(Stock stock);
    void deleteStock(Long idStock);
    Stock getStockById(Long idStock);
    List<Stock> getAllStocks();
}
