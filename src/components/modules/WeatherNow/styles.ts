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
  gap: 0.5em;
`
const UpsideConditions = styled.div`
  ${flex}
  justify-content: space-between;
`

const Temperature = styled.div`
  > span {
    line-height: 1em;
    font-size: 3.5em;
    font-weight: 500;
  }

  p span {
    font-weight: 600;
  }
`

const Weather = styled.div`
  text-align: right;

  img {
    width: 4.65em;
    margin: -0.75em 0;
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
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.generalBackground};
  border: 0;
  border-radius: 10px;
  padding: 0.5rem;

  display: block;
  margin: 0 auto;

  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: opacity(0.85);
  }
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
  p,
  img {
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: opacity(0.85);
    }
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
