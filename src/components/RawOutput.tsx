import React from 'react';

interface Props {
  rawTransaction: string;
}

export const RawOutput: React.FC<Props> = ({ rawTransaction }) => (
  <div>
    <h3>Raw Signed Transaction:</h3>
    <textarea
      readOnly
      value={rawTransaction}
      style={{ width: '100%', height: '100px' }}
    />
  </div>
);
