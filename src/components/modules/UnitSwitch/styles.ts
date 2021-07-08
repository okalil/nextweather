import styled from 'styled-components'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.buttonInactive};
  border: 1px solid #f2f2f2;
  border-radius: 10px;

  button {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 0;
    border-radius: 8px;
  }
`

export { Container }
