import styled from 'styled-components';
import { ButtonVariant } from '../interfaces/buttonProps';

type StyledButtonProps = {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, { background: string; color: string; border: string }> =
  {
    primary: {
      background: 'var(--color-background-contrast)',
      color: 'var(--color-content-inverse)',
      border: 'var(--zds-line-width) solid var(--color-content-high)',
    },
    secondary: {
      background: 'var(--color-background-base)',
      color: 'var(--color-content-high)',
      border: 'var(--zds-line-width) solid var(--color-content-high)',
    },
    disabled: {
      background: 'var(--color-background-disabled)',
      color: 'var(--color-content-disabled)',
      border: 'var(--zds-line-width) solid var(--color-content-high)',
    },
  };

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledButtonProps>`
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-family: inherit;
  font-size: var(--font-size-label-m);
  height: 2.5rem;
  max-width: 100%;
  min-width: 10.375rem;
  overflow: hidden;
  padding-left: var(--spacing-03);
  padding-right: var(--spacing-03);
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  line-height: var(--line-height-label-m);
  letter-spacing: var(--letter-spacing-label-m);
  text-transform: var(--text-transform-label-m);
  font-stretch: var(--font-stretch-label-m);
  font-weight: var(--font-weight-label-m);

  background-color: ${({ variant = 'primary' }) => variantStyles[variant].background};
  color: ${({ variant = 'primary' }) => variantStyles[variant].color};
  border: ${({ variant = 'primary' }) => variantStyles[variant].border};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
