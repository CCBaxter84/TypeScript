import axios from "axios";

export const getFullBalance = async (address: string) => {
  try {
    const res = await axios.get(`/utxos/${address}`);
    return res.data.balance;
  } catch(error) {
    return error;
  }
}

export const getSpentBalance = async (address: string, spent: boolean) => {
  try {
    const res = await axios.get(`/utxos/${address}/${spent}`);
    return res.data.balance;
  } catch(error) {
    return error;
  }
}