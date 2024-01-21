import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, SvgIcon, MenuItem } from '@mui/material';
import { MdOutlineAccountCircle } from 'react-icons/md';

const NavbarUser = ({ username }: { username: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // 登出
  };
  if (!username) {
    return (
      <Button className="button">
        <Link to="/login" className="link login">
          會員登入
        </Link>
      </Button>
    );
  }
  return (
    <>
      <Box className="userWrapper" onClick={handleMenu}>
        <Button className="button">
          <SvgIcon sx={{ color: '#fff' }}>
            <MdOutlineAccountCircle />
          </SvgIcon>
          <Box sx={{ ml: 1 }}>{username}</Box>
        </Button>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/member/user-info">
            我的帳戶
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>登出</MenuItem>
      </Menu>
    </>
  );
};

export default NavbarUser;
