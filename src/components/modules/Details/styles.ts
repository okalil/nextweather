import { Card } from '../../elements/Card'
import styled from 'styled-components'

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

const Condition = styled.li`
  display: flex;
  justify-content: space-between;

  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 0.75em 0.25em;

  p {
    display: flex;
    gap: 1em;
    img {
      width: 1.25em;
      filter: ${({ theme }) => theme.filters.invert};
    }
  }
`

const SunProgress = styled.span`
  height: 6.25em;
  width: 6.25em;
  margin: 1.25rem 0 calc(-50px + 1.25rem);
  border-radius: 50%;

  &::before {
    content: '';
    display: inline-flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      transparent 49%,
      ${({ theme }) => theme.colors.generalCardBackground} 49%
    );
    border-radius: 50%;
    transform: scale(0.9);
  }
`

const MoonPhase = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const MoonIcon = styled.img`
  width: 3em;
  height: 3em;
  filter: ${({ theme }) => theme.filters.contrast};
`

const TimesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimeIcon = styled.span`
  display: flex;
  align-items: center;

  img {
    width: 1.85em;
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

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`

export {
  Container,
  RiseSetContainer,
  LightContainer,
  TimesContainer,
  TimeIcon,
  SunProgress,
  MoonPhase,
  MoonIcon,
  Condition
}
