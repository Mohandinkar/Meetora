import React, { use } from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { useLocation } from 'react-router';
import useLogout from '../hooks/useLogout.js';
import { ShipWheel as ShipWheelIcon, BellIcon } from 'lucide-react';
import { Link } from 'react-router';
import ThemeSelctor from './ThemeSelector.jsx';
import { LogOutIcon } from 'lucide-react';

const Navbar = () => {

  const {authUser} = useAuthUser();

  const location = useLocation();
  const isChatPage = location.pathname?.startsWith('/chat');

  // const queryClient = useQueryClient();

  // const {mutate:logoutMutation, error, isLoading} = useMutation({

  //   mutationFn:logout,
  //   onSuccess:()=>{
  //     queryClient.invalidateQueries({queryKey:['authUser']});//refetch auth user data after logout
  //   }
  // });

  const {logoutMutation, error, isLoading} = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 px-4 flex items-center h-16 sticky top-0 z-30">

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-end w-full'>
          
           {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                  PolyTalk
                </span>
              </Link>
            </div>
          )}
           
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
              <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>
          
          {/* select themes from daisy UI */}
          <ThemeSelctor/>

           <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" rel="noreferrer" />
            </div>
          </div>

          {/* Logout button */}
          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
