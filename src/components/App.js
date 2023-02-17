import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendsList } from 'components/FriendsList/FriendsList';
import friends from 'components/FriendsList/friends.json';


export const App = () => {
    return (
        <div>
            <Profile user={user} />
            <Statistics title="Upload stats" stats={data}/>
            <FriendsList friends={friends} />
        </div>
    );
};