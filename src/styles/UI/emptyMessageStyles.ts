import styled from 'styled-components';

export const StyledEmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  text-align: center;
  margin-top: 2rem;
  border: none;

  p {
    color: var(--color-content-high);
    font-size: var(--font-size-body-l);
    line-height: var(--line-height-body-l);
    text-transform: var(--text-transform-body-l);
    font-stretch: var(--font-stretch-body-l);
    font-weight: var(--font-weight-body-l);
    font-family: var(--font-family-body-l);
  }
`;
