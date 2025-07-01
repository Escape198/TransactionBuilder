import React from 'react';
import { TransactionForm } from './components/TransactionForm';

const App: React.FC = () => (
  <div style={{ padding: '1rem' }}>
    <h1>Ethereum Transaction Builder</h1>
    <TransactionForm />
  </div>
);

export default App;