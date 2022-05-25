import React, { createContext } from 'react';
import * as payment from '../services/payment';

const PaymentContext = createContext({});

const PaymentProvider = ({ children }) => {
  async function paymentList(idpet) {
    return await payment.paymentList(idpet);
  }

  async function paymentCreate(idpet, description, value) {
    return await payment.paymentCreate(idpet, description, value);
  }

  async function paymentRemove(idPayment) {
    return await payment.paymentRemove(idPayment);
  }

  return (
    <PaymentContext.Provider
      value={{
        paymentList,
        paymentCreate,
        paymentRemove
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
