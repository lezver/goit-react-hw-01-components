import styled from 'styled-components';

export const StatsStyle = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  & > li {
    display: flex;
    flex-direction: column;
    width: 33.3%;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
    background-color: rgba(125, 155, 179, 0.315);
    border: 1px solid rgb(128 128 128 / 25%);
  }
`;
export const Label = styled.span`
  margin-bottom: 10px;
  color: var(--half-transparent);
`;

export const Quantity = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
