import React, { createContext, useState } from 'react';
import * as pet from '../services/pet';

const PetContext = createContext({});

const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState({});

  async function petList() {
    return await pet.petList();
  }

  async function petCreate(name) {
    return await pet.petCreate(name);
  }

  async function petRemove(idpet) {
    return await pet.petRemove(idpet);
  }

  function selectPet(pet) {
    setSelectedPet(pet);
  }

  return (
    <PetContext.Provider
      value={{
        petList,
        petCreate,
        petRemove,
        selectedPet,
        selectPet
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export { PetContext, PetProvider };
