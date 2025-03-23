import styled from 'styled-components';

export const LayoutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: var(--color-background-base);
  padding: var(--spacing-05) 0;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
`;

export const NavItem = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;

  img.navbar-logo-icon {
    width: auto;
    height: 100%;
  }

  .navbar-cart-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.3rem;

    span {
      width: 50%;
      height: 100%;
      font-size: var(--font-size-label-l);
      font-weight: var(--font-weight-label-m);
      letter-spacing: var(--letter-spacing-label-l);
      text-transform: var(--text-transform-label-l);
    }
  }

  img.navbar-cart-icon {
    width: 50%;
    height: auto;
  }
`;
