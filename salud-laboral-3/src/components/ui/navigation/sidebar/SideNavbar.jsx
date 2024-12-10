import { useState } from "react";
import ProfileOptions from "./ui/profileOptionsUI/ProfileOptions";
import LogicSidebar from "./logicSidebar/LogicSidebar";
import LogicNavcat from "./navcats/LogicNavcat";
import "./styles/navbar.css";
import "./styles/sideNavbar.css";

export default function SideNavbar({ isModalOpen, setModalToOpen }) {
  return (
    <>
      <LogicSidebar 
        activeClassName={isModalOpen ? 'SNavbar__modalOpen' : 'SNavbar__modalClose'}
        setModalToOpen={setModalToOpen}
      >
        <ProfileOptions greet={'hola'} role={'lol'} />
      </LogicSidebar>
    </>
  )
}
