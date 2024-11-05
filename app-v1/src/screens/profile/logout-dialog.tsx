import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ProfileStore } from '~/src/stores/profile.store';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '~/src/components/ui/alert-dialog';

export const LogoutDialog = () => {
  const { profileLogout } = ProfileStore();

  const logout = () => {
    console.log('logout');
  };

  return (
    <AlertDialog>

      <AlertDialogTrigger asChild>
        <Button variant='ghost' className='mt-12'>
          <Text className='native:text-xl text-xl text-destructive'>
            Sign Out
          </Text>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to sign out?
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            <Text>Cancel</Text>
          </AlertDialogCancel>
          <AlertDialogAction className='bg-destructive text-foreground' onPress={logout}>
            <Text>Sign Out</Text>
          </AlertDialogAction>
        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}
