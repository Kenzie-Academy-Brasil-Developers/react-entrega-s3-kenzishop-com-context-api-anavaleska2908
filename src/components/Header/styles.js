import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-bottom: 1em;
  align-items: center;
  background-color: var(--color-primary);
  height: 4.5em;
  box-shadow: var(--box-shadow);
  width: 1500px;

  h1 {
    color: var(--grey-3);
    font-size: 1.5em;
    margin-right: 0.5em;
    margin-bottom: 0.4em;
    margin-left: 0.5em;
    span {
      color: var(--details);
      font-weight: bold;
    }
  }
`;
