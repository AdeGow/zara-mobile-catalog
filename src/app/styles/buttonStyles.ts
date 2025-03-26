import styled from 'styled-components';
import { ButtonVariant } from '../interfaces/buttonProps';

type StyledButtonProps = {
  variant?: ButtonVariant;
};

const variantStyles: Record<
  ButtonVariant,
  {
    background: string;
    color: string;
    border: string;
    paddingLeft: string;
    paddingRight: string;
    justifyContent: string;
  }
> = {
  primary: {
    background: 'var(--color-background-contrast)',
    color: 'var(--color-content-inverse)',
    border: 'var(--zds-line-width) solid var(--color-content-high)',
    paddingLeft: 'var(--spacing-03)',
    paddingRight: 'var(--spacing-03)',
    justifyContent: 'center',
  },
  secondary: {
    background: 'var(--color-background-base)',
    color: 'var(--color-content-high)',
    border: 'var(--zds-line-width) solid var(--color-content-high)',
    paddingLeft: 'var(--spacing-03)',
    paddingRight: 'var(--spacing-03)',
    justifyContent: 'center',
  },
  disabled: {
    background: 'var(--color-background-disabled)',
    color: 'var(--color-content-mid)',
    border: 'none',
    paddingLeft: 'var(--spacing-03)',
    paddingRight: 'var(--spacing-03)',
    justifyContent: 'center',
  },
  transparent: {
    background: 'transparent',
    color: 'var(--color-content-high)',
    border: 'var(--zds-line-width) solid transparent',
    paddingLeft: '0',
    paddingRight: '0',
    justifyContent: 'flex-start',
  },
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledButtonProps>`
  display: flex;
  align-items: center;
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
  padding-left: ${({ variant = 'primary' }) => variantStyles[variant].paddingLeft};
  padding-right: ${({ variant = 'primary' }) => variantStyles[variant].paddingRight};
  justify-content: ${({ variant = 'primary' }) => variantStyles[variant].justifyContent};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
