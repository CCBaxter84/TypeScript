import axios from "axios";

export const getFullBalance = async (address: string) : Promise<number> => {
  try {
    const balance: number = await axios.get(`/utxos/${address}`);
    return balance;
  } catch(error) {
    return error;
  }
}

export const getSpentBalance = async (address: string, spent: boolean) : Promise<number> => {
  try {
    const balance: number = await axios.get(`/utxos/${address}/${spent}`);
    return balance;
  } catch(error) {
    return error;
  }
}