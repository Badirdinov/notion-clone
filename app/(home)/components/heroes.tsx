import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

 const Heroes = () => {
    return (
      <>
        <div className='max-w-3xl space-y-4'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
                Write, plan, share. AI at your side.
            </h1>
            <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
                Notion is the connected workspace where better, faster work happens.
            </h3>
            <Button size={"lg"}>Get Notion Free <ArrowRight className='w-4 h-4 ml-2' /> </Button>
        </div>
          <div className='flex flex-col items-center justify-center max-w-5xl'>
              <div className='flex items-center'>
                  <div className='relative h-[400px] w-[400px] hidden md:block'>
                    <Image
                      src='/svg/men.svg'
                      alt='Men'
                      fill
                      className='block dark:hidden'
                    />
                      <Image
                        src='/svg/men-dark.svg'
                        alt='Men'
                        fill
                        className='hidden dark:block'
                      />
                  </div>
              </div>
          </div>
      </>
    );
};

export default Heroes