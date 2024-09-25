import { signOut } from "next-auth/react";

import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";

const Sidebar = () => {
  const { data: currenUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
      alert: currenUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currenUser?.id}`,
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <div className=" col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => {
            return (
              <SidebarItem
                auth={item.auth}
                key={item.label}
                label={item.label}
                icon={item.icon}
                href={item.href}
                alert={item.alert}
              />
            );
          })}
          {currenUser && (
            <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
