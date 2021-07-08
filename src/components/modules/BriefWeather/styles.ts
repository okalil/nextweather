import styled from 'styled-components'
import { Card } from '../../elements/Card'

const Container = styled(Card)`
  display: flex;
  gap: 1em;

  p {
    font-weight: 600;
  }
`

const Weather = styled.div`
  img {
    width: 3.5em;
    margin-top: -0.625em;
  }

  p {
    text-align: center;
    text-transform: capitalize;
  }
`

const Conditions = styled.ul`
  flex: 1;
`

const Condition = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50%;

  p {
    display: flex;
    align-items: center;

    font-size: 0.925em;
    text-transform: uppercase;
  }

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    img {
      height: 1.25em;
      width: 1.25em;
      filter: ${({ theme }) => theme.filters.invert};
    }
  }

  &:last-child img {
    height: 1em;
    width: 1.25em;
  }
`

export { Container, Weather, Conditions, Condition }
