'use client';

import React from 'react';
import { StyledButton } from '@/styles/UI/buttonStyles';
import { ButtonProps } from '@/interfaces/buttonProps';

export default function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}
