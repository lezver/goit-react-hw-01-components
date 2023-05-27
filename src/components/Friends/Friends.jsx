import {
  FriendList,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './Friends.styled';

import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, id, isOnline, name }) => {
        return (
          <FriendListItem key={id}>
            <Status status={isOnline} />
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendListItem>
        );
      })}
    </FriendList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
