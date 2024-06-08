import * as React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import RouteIcon from "@mui/icons-material/Route";
import ChatIcon from "@mui/icons-material/Chat";
import AdbIcon from "@mui/icons-material/Adb";
import AddIcon from "@mui/icons-material/Add";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ListAltIcon from '@mui/icons-material/ListAlt';
import BugReportIcon from '@mui/icons-material/BugReport';

const menus = [
  {
    icon: <RouteIcon />,
    menuTitle: "Routing",
    path: "/routing",
  },
  {
    icon: <InfoIcon />,
    menuTitle: "About",
    path: "/about",
    child: [
      {
        icon: "a",
        menuTitle: "Child1",
        child: [{ icon: "i", menuTitle: "innerTitle", path: "/inner-child" }],
        path: "/child1",
      },
      {
        icon: "b",
        menuTitle: "Child2",
        path: "/child2",
      },
    ],
  },
  {
    icon: <ChatIcon />,
    menuTitle: "Comments",
    path: "/comments",
  },
  {
    icon: <AdbIcon />,
    menuTitle: "Pokemon",
    path: "/pokemon",
  },
  {
    icon: <AddIcon />,
    menuTitle: "Accordion",
    path: "/accordion",
  },
  {
    icon: <ChecklistIcon />,
    menuTitle: "Form",
    path: "/form",
  },
  {
    icon: <ChecklistIcon />,
    menuTitle: "Form Action",
    path: "/form-action",
  },
  {
    icon: <ListAltIcon />,
    menuTitle: "Todo Task",
    path: "/todo",
  },
  {
    icon: <BugReportIcon />,
    menuTitle: "Ticket Generate",
    path: "/ticket",
  },
];
export const MenuDrawer = ({ Menus = menus }) => {
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {Menus.map((item, index) => {
          //   console.log(item.menuTitle);
          return <Menutry item={item} key={index} />;
        })}
      </List>
    </div>
  );
};

const Menutry = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <Link to={item?.path}>
          {" "}
          <ListItemText primary={item.menuTitle} />
        </Link>
        {item.child && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {item?.child?.length > 0 && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ marginLeft: "30px" }}
        >
          <MenuDrawer Menus={item.child} />
        </Collapse>
      )}
    </>
  );
};
