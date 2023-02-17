import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';

export const App = () => {
    return (
        <div>
            <Profile user={user} />
            <Statistics title="Upload stats" stats={data}/>
        </div>
    );
};