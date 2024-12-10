"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMenu, TeamDisplayMenu } from "@/constants/nav-menu";
import { UserButton } from "@clerk/nextjs";
import { NavMain } from "./nav-main";
import { TeamDisplay } from "./team-display";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamDisplay team={TeamDisplayMenu} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NavMenu} />
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
