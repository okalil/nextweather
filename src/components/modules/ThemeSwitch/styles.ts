import styled from 'styled-components'

const Button = styled.button`
  position: relative;
  width: 4rem;
  height: 2rem;

  background: ${({ theme }) => theme.colors.buttonInactive};
  border: 1px solid #f2f2f2;
  border-radius: 50px;
  cursor: pointer;
`

const Wrapper = styled.div`
  width: 32px;
  height: 30px;
  position: absolute;

  border-radius: 100%;
  transition: 0.5s ease;

  @media (min-width: 1366px) {
    height: 92%;
  }
`

export { Button, Wrapper }
