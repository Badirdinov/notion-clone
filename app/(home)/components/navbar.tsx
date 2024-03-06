import React from 'react';
import { Logo } from "@/app/(home)/components/logo";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
      <div className='z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between'>
        <Logo/>
          <div className='flex items-center gap-x-2'>
              <Button size={"sm"} variant={"ghost"} >
                  Log In
              </Button>
              <Button size={"sm"}>
                  Get Notion Free
              </Button>
            <ModeToggle/>
          </div>
      </div>
    );
};

export default Navbar;
