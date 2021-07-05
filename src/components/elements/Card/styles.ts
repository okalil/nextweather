import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.generalCardBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
`
