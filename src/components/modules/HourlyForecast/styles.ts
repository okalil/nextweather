import styled from 'styled-components'

const HourlyList = styled.ul`
  display: flex;
  overflow: auto;
  margin-top: 0.5rem;
`

const HourlyItem = styled.li`
  list-style: none;
  text-align: center;

  flex: 1;
  min-width: 80px;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  > img {
    width: 50px;
  }

  > span {
    display: block;
  }
`

const Date = styled.span`
  font-weight: 500;
`

const Temp = styled.span`
  font-weight: 600;
  color: #00aaf0;
`

const Prob = styled.div`
  img {
    width: 10px;
  }

  span {
    font-weight: 500;
    font-size: 0.9rem;
  }
`

export { HourlyList, HourlyItem, Date, Temp, Prob }
