import styled from 'styled-components'

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.headerBackground};
  padding-right: 0.5rem;
`

const MenuHeader = styled.header`
  height: 4rem;
  display: flex;

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
`

export { MenuContainer, MenuHeader, MenuContent }
