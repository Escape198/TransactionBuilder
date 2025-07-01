import { useState } from 'react';
import { ethers } from 'ethers';

export const useTransactionBuilder = () => {
  const [privateKey, setPrivateKey] = useState<string>('');
  const [rawTransaction, setRawTransaction] = useState<string>('');

  const signTransaction = async (fields: {
    nonce: string;
    to: string;
    value: string;
    gasLimit: string;
    gasPrice: string;
    data: string;
    chainId: string;
  }) => {
    try {
      const wallet = new ethers.Wallet(privateKey);

      const tx = {
        nonce: ethers.BigNumber.from(fields.nonce).toHexString(),
        to: fields.to,
        value: ethers.utils.parseEther(fields.value).toHexString(),
        gasLimit: ethers.BigNumber.from(fields.gasLimit).toHexString(),
        gasPrice: ethers.BigNumber.from(fields.gasPrice).toHexString(),
        data: fields.data,
        chainId: parseInt(fields.chainId, 10),
      };

      const signedTx = await wallet.signTransaction(tx);
      setRawTransaction(signedTx);
      return signedTx;
    } catch (error) {
      console.error('Error signing transaction:', error);
      throw error;
    }
  };

  return {
    privateKey,
    setPrivateKey,
    rawTransaction,
    signTransaction,
  };
};
