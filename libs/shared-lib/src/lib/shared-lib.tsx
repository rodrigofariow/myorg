import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedLibProps {}

const StyledSharedLib = styled.div`
  color: pink;
`;

export function SharedLib(props: SharedLibProps) {
  return (
    <StyledSharedLib>
      <h1>Welcome to SharedLib!</h1>
    </StyledSharedLib>
  );
}

export default SharedLib;
