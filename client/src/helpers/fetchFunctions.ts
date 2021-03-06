import axios from "axios";

export const getFullBalance = async (address: string) => {
  try {
    const res = await axios.get(`/utxos/${address}`);
    return { balance: res.data.balance };
  } catch(error) {
    return { error: error.response.data.msg };
  }
}

export const getSpentBalance = async (address: string, spent: boolean|null) => {
  try {
    const res = await axios.get(`/utxos/${address}/${spent}`);
    return { balance: res.data.balance };
  } catch(error) {
    return { error: error.response.data.msg };
  }
}