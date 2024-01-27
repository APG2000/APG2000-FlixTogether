package com.FlixTogether.FlixTogether;

public class Pessoa {
    String name;
    int idade;

    Pessoa(int idade,String name){
        this.idade = idade;
        this.name = name;
    };

    public int getIdade() {
        return idade;
    }

    public String getName() {
        return name;
    }


}
