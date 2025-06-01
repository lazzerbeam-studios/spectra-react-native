import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';
// import { CircleUserRound } from '~/src/icons/icons';

export const DashboadProfile = () => {
  return (
    <Link href='/profile' asChild>
      <TouchableOpacity className='web:me-2'>
        {/* <CircleUserRound className='text-foreground' size={30} strokeWidth={1.25}></CircleUserRound> */}
      </TouchableOpacity>
    </Link>
  );
}
