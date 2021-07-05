import { Card } from '../../elements/Card'
import styled from 'styled-components'

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Condition = styled.li`
  display: flex;
  justify-content: space-between;

  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 0.75rem 0.25rem;

  p {
    display: flex;
    gap: 1rem;
    img {
      width: 20px;
    }
  }
`

const SunProgress = styled.span`
  height: 100px;
  width: 100px;
  margin: 1rem 0 calc(-50px + 1rem);
  border-radius: 50%;

  &::before {
    content: '';
    display: inline-flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, transparent 50%, white 50%);
    border-radius: 50%;
    transform: scale(0.9);
  }
`

const MoonIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 1rem;
`

const TimesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimeIcon = styled.span`
  display: flex;
  align-items: center;

  img {
    width: 30px;
  }
`

const LightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const RiseSetContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export {
  Container,
  RiseSetContainer,
  LightContainer,
  TimesContainer,
  TimeIcon,
  SunProgress,
  MoonIcon,
  Condition
}
