import styled, { css } from 'styled-components'

const flex = css`
  display: flex;
`

const Upside = styled.div`
  ${flex}
  justify-content: space-between;
  margin: 0.5rem;

  span {
    line-height: 3.5rem;
    font-size: 3.5rem;
    font-weight: 600;
  }
`
const Sun = styled.div`
  width: 110px;
  height: 55px;
  background-image: url('/sun-path.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto 0.5rem;

  img {
    width: 30px;
    height: 30px;
    transform: translate(5px, 0px);
  }
`

const SunTimes = styled.div`
  ${flex}

  div {
    ${flex}
    justify-content: center;
  }

  img {
    width: 30px;
  }
`

const Condition = styled.li`
  ${flex}
  justify-content: space-between;

  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 0.75rem 0.25rem;

  img {
    width: 20px;
  }

  p {
    flex-grow: 1;
    padding-left: 1rem;
  }
`

export { Upside, Sun, SunTimes, Condition }
