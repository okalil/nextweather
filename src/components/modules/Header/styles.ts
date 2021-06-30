import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 4rem;
  padding: 0.75rem 0.5rem;
  background: ${({ theme }) => theme.colors.headerBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 30px;
    height: 30px;
  }

  span {
    float: right;
  }
`

export const MenuButton = styled.button`
  position: absolute;
  right: 8px;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1;

  img {
    display: block;
  }
`
