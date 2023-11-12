'use client'
import React, { useEffect } from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

const NavTab: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname()
  const [selected, setSelected] = React.useState('0');

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelected('0');
        break;
      case '/begin':
        setSelected('1');
        break;
      case '/ourstory':
        setSelected('2');
        break;
      default:
        setSelected('0');
        break;
    }
  }, [pathname]);

  // const handleTabChange = (key: React.Key) => {
  //   setSelected(key.toString());

  //   switch (key) {
  //     case '0':
  //       router.push('/');
  //       break;
  //     case '1':
  //       router.push('/begin');
  //       break;
  //     case '2':
  //       router.push('/ourstory');
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const handleTabChange = (key: React.Key) => {
    setSelected(key.toString());
  
    // Delay time in milliseconds (e.g., 500ms for half a second)
    const delayTime = 400;
  
    setTimeout(() => {
      switch (key) {
        case '0':
          router.push('/');
          break;
        case '1':
          router.push('/begin');
          break;
        case '2':
          router.push('/ourstory');
          break;
        default:
          break;
      }
    }, delayTime);
  };
  

  return (
    <div className="flex flex-wrap gap-4 font-sans sticky bottom-8 sm:bottom-16 inset-x-0 justify-center sm:py-4">
        <Tabs 
          color={"primary"} 
          aria-label="Tabs colors" 
          selectedKey={selected}
          size="lg" className="shadow-lg rounded-xl" 
          radius="sm" 
          onSelectionChange={handleTabChange}
        >
          <Tab key="0" title="Home"></Tab>
          <Tab key="1" title="Begin Journey"></Tab>
          <Tab key="2" title="Our Story"></Tab>
        </Tabs>

     

    </div>
  );
}

export default NavTab;
