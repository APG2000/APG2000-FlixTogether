package com.FlixTogether.FlixTogether;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@CrossOrigin(origins = "http://localhost:3000") // Ajuste conforme necessário
@RestController 
public class Test{

    @GetMapping("/api/hello") 
   
    
    public Pessoa sendPessoa(){
        Pessoa p1=new Pessoa(1,"ola meu nome é dovas");


        return p1;
        
    }
}

