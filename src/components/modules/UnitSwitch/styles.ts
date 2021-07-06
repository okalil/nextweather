import styled from 'styled-components'

const Container = styled.div`
  background: #72aec3;
  border: 1px solid #f2f2f2;
  border-radius: 10px;

  button {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 0;
    border-radius: 8px;
    transition: 0.3s;
  }
`

export { Container }
