import axios from "axios";

export const getFullBalance = async (address: string) => {
  try {
    const res = await axios.get(`http://localhost:5000/utxos/${address}`);
    return { balance: res.data.balance };
  } catch(error) {
    return { error: error.response.data.msg };
  }
}

export const getSpentBalance = async (address: string, spent: boolean) => {
  try {
    const res = await axios.get(`http://localhost:5000//utxos/${address}/${spent}`);
    return { balance: res.data.balance };
  } catch(error) {
    return { error: error.response.data.msg };
  }
}