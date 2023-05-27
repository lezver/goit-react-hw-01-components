import styled from 'styled-components';

const setBgColor = props => {
  const Label = props.children[1].props.dataLabel;

  switch (Label) {
    case '.docx':
      return 'var(--half-blue)';
    case '.mp3':
      return 'var(--half-red)';
    case '.pdf':
      return 'var(--half-purple)';
    case '.psd':
      return 'var(--half-green)';
    default:
      return 'var(--half-transparent)';
  }
};

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Item = styled.li`
  width: 25%;
  background-color: ${setBgColor};
  color: rgba(255, 255, 255, 0.705);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
