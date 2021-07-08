import styled from 'styled-components'

const MenuContainer = styled.div`
  --menu-border: ${({ theme }) => theme.colors.generalBackground};

  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.headerBackground};

  border-bottom: 1px solid var(--menu-border);
  border-left: 1px solid var(--menu-border);
`

const MenuHeader = styled.header`
  display: flex;
  height: calc(4rem - 1px);
  padding: 0 0.5rem;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-left: auto;
  }
`

const MenuContent = styled.div`
  background: ${({ theme }) => theme.colors.generalCardBackground};
  padding: 0.5rem;

  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export { MenuContainer, MenuHeader, MenuContent }
