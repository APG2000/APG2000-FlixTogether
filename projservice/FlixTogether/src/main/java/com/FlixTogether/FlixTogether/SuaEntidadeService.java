package com.FlixTogether.FlixTogether;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class SuaEntidadeService {
    @Autowired
    private ItemRepository repository;

    public List<GroceryItem> getAllEntities() {
        return repository.findAll();
    }

    public GroceryItem saveEntity(GroceryItem entity) {
        return repository.save(entity);
    }

   

    public GroceryItem updateEntity(String id, GroceryItem entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateEntity'");
    }

    public void deleteEntity(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteEntity'");
    }

    // Add other business logic as needed
}