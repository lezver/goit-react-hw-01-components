import styled from 'styled-components';

export const TransactionHistory = styled.table`
  width: 700px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: #00000085 0px 4px 4px 1px;
  background-color: white;
  margin-bottom: 50px;
`;
export const Thead = styled.thead`
  > tr > th {
    padding: 20px 0;
    background-color: var(--half-green);
    text-transform: uppercase;
    color: white;
    border-radius: 5px;
  }
`;
export const Tbody = styled.tbody`
  > tr:nth-child(2n) {
    background-color: var(--half-orange);
  }
  > tr {
    background-color: var(--half-purple);
  }
  > tr > td {
    padding: 20px 0;
    text-align: center;
    border-radius: 5px;
  }
`;
