import React from 'react';
import { StyledEmptyMessage } from '../styles/emptyMessageStyles';

export default function EmptyMessage() {

  return (
    <div>
      <StyledEmptyMessage>
        <p>No products to display.</p>
      </StyledEmptyMessage>
    </div>
  );
}
