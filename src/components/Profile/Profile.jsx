import { ProfileStyle } from './Profile.styled';
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';

export const Profile = ({ user }) => {
  return (
    <ProfileStyle>
      <Description user={user} />

      <Stats user={user} />
    </ProfileStyle>
  );
};
