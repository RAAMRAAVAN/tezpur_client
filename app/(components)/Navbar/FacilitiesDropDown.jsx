import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const FacilitiesDropdown = ({ item, Facilities }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      key={item.name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        sx={{ color: "gray", fontWeight: "bold" }}
        aria-controls={open ? "facilities-menu" : undefined}
        aria-haspopup="true"
      >
        {item.name} <ExpandMore />
      </Button>

      <Menu
        id="facilities-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        }}
      >
        {Facilities?.length > 0 ? (
          Facilities.map((facility) => (
            <Link
              key={facility.id}
              href={`/facilities#${facility._id}`}
              passHref
              legacyBehavior
            >
              <MenuItem
                key={facility.name || facility.title}
                onClick={() => setAnchorEl(null)}
              >
                <Typography>{facility.title}</Typography>
              </MenuItem>
            </Link>
          ))
        ) : (
          <MenuItem disabled>
            <Typography>No facilities available</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default FacilitiesDropdown;
