
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../lib/api.js';

const useLogout = () => {

    const queryClient = useQueryClient();

    const {mutate:logoutMutation, error, isLoading} = useMutation({
        mutationFn:logout,
        onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['authUser']});//refetch auth user data after logout
        }
    })

    return {logoutMutation, error, isLoading};
}

export default useLogout;
