import styled from 'styled-components'
import { Card } from '../../elements/Card'

export const Container = styled(Card)`
  background: ${({ theme }) => theme.colors.currentCardBackground};
  color: ${({ theme }) => theme.colors.textSecondary};

  > p {
    opacity: 0.75;
    padding-bottom: 0.5rem;
  }

  > span {
    font-size: 0.875rem;
  }
`
export const Conditions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 0;

  div:first-child {
    span {
      line-height: 3.5rem;
      font-size: 3.5rem;
      font-weight: 500;
    }

    p {
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  div:last-child {
    img {
      width: 50px;
      height: 50px;
    }

    span {
      display: block;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`
