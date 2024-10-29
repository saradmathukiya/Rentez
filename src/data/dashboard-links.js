import { ACCOUNT_TYPE } from "../utils/contsants";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  // {
  //   id: 2,
  //   name: "Dashboard",
  //   path: "/dashboard/seller",
  //   type: ACCOUNT_TYPE.SELLER,
  //   icon: "VscDashboard",
  // },
  {
    id: 3,
    name: "My Listings",
    path: "/dashboard/my-listing",
    type: ACCOUNT_TYPE.SELLER,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Listing",
    path: "/dashboard/create-listing",
    type: ACCOUNT_TYPE.SELLER,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Settings",
    path: "/dashboard/settings",
    icon: "VscSettingsGear",
  },
];