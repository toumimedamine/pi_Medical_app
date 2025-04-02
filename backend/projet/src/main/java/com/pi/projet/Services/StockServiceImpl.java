package com.pi.projet.Services;

import com.pi.projet.Entities.Stock;
import com.pi.projet.Repositories.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImpl implements IStockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    @Override
    public Stock updateStock(Stock stock) {
        return stockRepository.save(stock);
    }

    @Override
    public void deleteStock(Long idStock) {
        stockRepository.deleteById(idStock);
    }

    @Override
    public Stock getStockById(Long idStock) {
        return stockRepository.findById(idStock).orElse(null);
    }

    @Override
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }
}
