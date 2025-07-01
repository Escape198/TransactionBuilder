import React from 'react';

interface Props {
  fields: {
    nonce: string;
    to: string;
    value: string;
    gasLimit: string;
    gasPrice: string;
    data: string;
    chainId: string;
  };
  signTransaction: (fields: any) => Promise<void>;
}

export const SignButton: React.FC<Props> = ({ fields, signTransaction }) => {
  const handleSign = async () => {
    try {
      await signTransaction(fields);
      alert('Transaction signed successfully!');
    } catch {
      alert('Error signing transaction.');
    }
  };

  return <button onClick={handleSign}>Sign Transaction</button>;
};
