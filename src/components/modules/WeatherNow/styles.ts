import styled, { css } from 'styled-components'
import { Card } from '../../elements/Card'

const flex = css`
  display: flex;
`

const Container = styled(Card)`
  background: ${({ theme }) => theme.colors.currentCardBackground};
  color: ${({ theme }) => theme.colors.textSecondary};

  ${flex}
  flex-direction: column;
  gap: 0.5rem;
`
const UpsideConditions = styled.div`
  ${flex}
  justify-content: space-between;
`

const Temperature = styled.div`
  > span {
    line-height: 3.5rem;
    font-size: 3.5rem;
    font-weight: 500;
  }

  p span {
    font-weight: 600;
  }
`

const Weather = styled.div`
  text-align: right;

  img {
    width: 75px;
    margin: -10px 0 -16px;
  }

  p {
    font-weight: 600;
  }
`

const ConditionItem = styled.li`
  ${flex}
  justify-content: space-between;

  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.generalBackground};
  padding: 0.75rem 0;

  &:last-child {
    padding-bottom: 0;
  }
`

const Button = styled.button`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.textTertiary};
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.colors.generalBackground};
  border: 0;
  border-radius: 10px;
  padding: 0.5rem;

  display: block;
  margin: 0 auto;
`

const ButtonItem = styled.li`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.generalBackground};
  padding-top: 0.75rem;
`

const ShowDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 500;
  }

  img {
    width: 27px;
    height: 27px;
  }
`

export {
  Container,
  UpsideConditions,
  Temperature,
  Weather,
  Button,
  ButtonItem,
  ConditionItem,
  ShowDetails
}
