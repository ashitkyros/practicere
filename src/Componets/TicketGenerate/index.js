import { Box } from "@mui/material";
import React from "react";
import TicketCard from "../TicketCard";

function TicketGenerate() {
  return (
    <>
      <Box sx={{display:"flex" }}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </Box>
    </>
  );
}

export default TicketGenerate;
