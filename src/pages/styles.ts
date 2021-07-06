import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.5rem;

  @media only screen and (min-height: 1024px) {
    padding-top: 1.25rem;
    gap: 1.25rem
  }
`
