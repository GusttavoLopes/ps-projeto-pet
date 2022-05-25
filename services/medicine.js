import api from './api';

async function medicineList(idpet) {
  try {
    const { data } = await api.post('/medicine/list', { idpet });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function medicineCreate(idpet, name) {
  try {
    const { data } = await api.post('/medicine/create', { idpet, name });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function medicineRemove(idmedicine) {
  try {
    const { data } = await api.delete('/medicine/remove', {
      data: { idmedicine: idmedicine }
    });
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

export { medicineList, medicineCreate, medicineRemove };
