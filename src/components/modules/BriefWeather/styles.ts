import styled from 'styled-components'
import { Card } from '../../elements/Card'

const Container = styled(Card)`
  display: flex;
  gap: 1rem;

  p {
    font-weight: 600;
  }
`

const Weather = styled.div`
  img {
    width: 55px;
    margin-top: -10px;
  }

  p {
    text-align: center;
    text-transform: capitalize;
  }
`

const Conditions = styled.ul`
  flex: 3;
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

    font-size: 0.95rem;
    text-transform: uppercase;
  }

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    img {
      height: 20px;
      width: 20px;
    }
  }

  &:last-child img {
    height: 15px;
    width: 20px;
  }
`

export { Container, Weather, Conditions, Condition }
