import styled from 'styled-components'

const Wrapper = styled.header`
  height: 4em;
  padding: 0.75em 0;
  background: ${({ theme }) => theme.colors.headerBackground};
  color: ${props => props.theme.colors.textSecondary};
`

const Container = styled.div`
  height: 100%;
  width: clamp(80vw, 1200px, calc(100% - 1em));
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SubContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
`

const Logo = styled.img`
  height: 100%;
`

export { Wrapper, Container, SubContainer, Logo }
