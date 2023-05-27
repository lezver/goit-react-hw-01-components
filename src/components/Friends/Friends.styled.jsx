import styled from 'styled-components';

const setBgColor = props => {
  return props.status ? 'var(--half-green)' : 'var(--half-red)';
};

export const FriendList = styled.ul`
  max-width: 250px;
  margin: 0 auto 50px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FriendListItem = styled.li`
  overflow: hidden;
  border-radius: 5px;
  background-color: rgba(245, 222, 179, 0.5);
  box-shadow: #00000085 0px 4px 4px 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
`;

export const Status = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  background-color: ${setBgColor};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
`;
