import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import EmailSettings from "./EmailSettings";

export default function UserProfilePage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");

  return (
    <>
      <Route path="profile-overview" element={<ProfileOverview></ProfileOverview>} />
      <Route path="account-information" element={<AccountInformation />} />
      <Route path="change-password" element={<ChangePassword />} />
      <Route path="email-settings" element={<EmailSettings />} />
      <Route path="personal-information" element={<PersonaInformation />} />
      <Route path="*" element={<Navigate to={"profile-overview"}></Navigate>} />
    </>
  );
}
