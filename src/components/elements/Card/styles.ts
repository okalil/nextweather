import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 0.5rem;
  padding: 16px;
  background: ${({ theme }) => theme.colors.generalCardBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
`
