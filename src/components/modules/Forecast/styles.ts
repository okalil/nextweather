import styled from 'styled-components'

const DayList = styled.ul`
  display: flex;
  overflow-x: auto;
  padding-bottom: 1rem;
`

const DayItem = styled.li`
  list-style: none;
  padding: 0 0.75rem;
  white-space: nowrap;

  &:first-child {
    padding-left: 0.25rem;
  }

  &:last-child {
    padding-right: 0.25rem;
  }

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  > img {
    width: 50px;
  }
`

const Span = styled.span`
  display: block;
  text-align: center;
`

const Date = styled(Span)`
  line-height: 2.25rem;
  text-transform: capitalize;
`

const Max = styled(Span)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const Min = styled(Span)`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const Prob = styled.div`
  text-align: center;

  img {
    width: 10px;
  }

  span {
    font-size: 0.9rem;
  }
`

export { DayList, DayItem, Date, Max, Min, Prob }
