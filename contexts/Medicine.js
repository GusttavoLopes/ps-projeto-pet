import React, { createContext } from 'react';
import * as medicine from '../services/medicine';

const MedicineContext = createContext({});

const MedicineProvider = ({ children }) => {
  async function medicineList(idpet) {
    return await medicine.medicineList(idpet);
  }

  async function medicineCreate(idpet, name) {
    return await medicine.medicineCreate(idpet, name);
  }

  async function medicineRemove(idmedicine) {
    return await medicine.medicineRemove(idmedicine);
  }

  return (
    <MedicineContext.Provider
      value={{
        medicineList,
        medicineCreate,
        medicineRemove
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export { MedicineContext, MedicineProvider };
