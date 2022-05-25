import api from './api';

async function paymentList(idpet) {
  try {
    const { data } = await api.post('/payment/list', { idpet });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function paymentCreate(idpet, description, value) {
  try {
    const { data } = await api.post('/payment/create', {
      idpet,
      description,
      value
    });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function paymentRemove(idpayment) {
  try {
    const { data } = await api.delete('/payment/remove', {
      data: { idpayment }
    });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

export { paymentList, paymentCreate, paymentRemove };
