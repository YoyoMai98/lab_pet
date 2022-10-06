package com.codetests.bnta.petAPI.controllers;

import com.codetests.bnta.petAPI.models.Pet;
import com.codetests.bnta.petAPI.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/pets")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping
    public ResponseEntity<List<Pet>> getAllPets(){
        List<Pet> pets = petRepository.findAll();
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Pet> addNewPet(@RequestBody Pet pet){
        Pet savedPet = petRepository.save(pet);
        return new ResponseEntity<>(savedPet, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deletePet(@PathVariable long id){
        petRepository.deleteById(id);
        return new ResponseEntity(null, HttpStatus.OK);
    }

}
