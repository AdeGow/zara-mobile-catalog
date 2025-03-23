import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: var(--spacing-05);
  position: relative;

  img {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 5%;
  }
`;

export const SearchInput = styled.input`
  font-size: var(--font-size-label-m);
  width: 100%;
  line-height: var(--line-height-label-m);
  font-weight: var(--font-weight-label-m);
  height: 1.5rem;
  border-bottom: 0.0625rem solid var(--color-content-low);
`;
