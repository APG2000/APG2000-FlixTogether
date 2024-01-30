package com.FlixTogether.FlixTogether;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sua-entidade")
public class SuaEntidadeController {

    @Autowired
    private SuaEntidadeService service;

    @GetMapping("/db") 

    public ResponseEntity<List<GroceryItem>> getAllEntities() {
        List<GroceryItem> entities = service.getAllEntities();
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<GroceryItem> saveEntity(@RequestBody GroceryItem entity) {
        GroceryItem savedEntity = service.saveEntity(entity);
        return new ResponseEntity<>(savedEntity, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GroceryItem> updateEntity(@PathVariable String id, @RequestBody GroceryItem entity) {
        GroceryItem updatedEntity = service.updateEntity(id, entity);
        if (updatedEntity != null) {
            return new ResponseEntity<>(updatedEntity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntity(@PathVariable String id) {
        service.deleteEntity(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
