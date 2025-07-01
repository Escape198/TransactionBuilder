import React, { useState } from 'react';
import { isAddress, isPositiveInteger, isHexString } from '../utils/validators';
import { SignButton } from './SignButton';
import { RawOutput } from './RawOutput';
import { useTransactionBuilder } from '../hooks/useTransactionBuilder';

export const TransactionForm: React.FC = () => {
  const { privateKey, setPrivateKey, rawTransaction, signTransaction } =
    useTransactionBuilder();

  const [fields, setFields] = useState({
    nonce: '',
    to: '',
    value: '',
    gasLimit: '',
    gasPrice: '',
    data: '0x',
    chainId: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(e.target.value.trim());
  };

  return (
    <div>
      <h2>Transaction Fields</h2>
      <input
        name="nonce"
        placeholder="Nonce"
        value={fields.nonce}
        onChange={handleChange}
      />
      <input
        name="to"
        placeholder="Recipient address"
        value={fields.to}
        onChange={handleChange}
      />
      <input
        name="value"
        placeholder="ETH amount"
        value={fields.value}
        onChange={handleChange}
      />
      <input
        name="gasLimit"
        placeholder="Gas Limit"
        value={fields.gasLimit}
        onChange={handleChange}
      />
      <input
        name="gasPrice"
        placeholder="Gas Price (wei)"
        value={fields.gasPrice}
        onChange={handleChange}
      />
      <input
        name="data"
        placeholder="Data (hex)"
        value={fields.data}
        onChange={handleChange}
      />
      <input
        name="chainId"
        placeholder="Chain ID"
        value={fields.chainId}
        onChange={handleChange}
      />
      <input
        name="privateKey"
        placeholder="Private Key"
        value={privateKey}
        onChange={handleKeyChange}
      />

      <SignButton fields={fields} signTransaction={signTransaction} />

      <RawOutput rawTransaction={rawTransaction} />
    </div>
  );
};
