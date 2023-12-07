import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { pages } from '@/pages/pages';
import { useLocation } from 'react-router-dom';

function Navbar() {
	const backgroundColor = "#1a1a1a";
	const unselectedColor = "#ffffff";

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="fixed"
			sx={{ bgcolor: backgroundColor }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex'
							},
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: "inherit",
							textDecoration: 'none',
						}}>

						Edy
					</Typography>

					<Box sx={{
						flexGrow: 1,
						display: {
							xs: 'flex',
							md: 'none'
						}
					}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />

						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<Typography
										textAlign="center"
										component="a"
										sx={{
											href: page.navigation,
										}}>
										{page.title}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Edy
					</Typography>

					<Box sx={{
						flexGrow: 1,
						display: {
							xs: 'none',
							md: 'flex'
						}
					}}>
						{pages.map((page) => (
							<Link
								noWrap
								href={page.navigation}
								onClick={handleCloseNavMenu}
								underline="none"
								sx={{
									component: 'a',
									mr: 5,
									display: {
										xs: 'none',
										md: 'flex'
									},
									color: unselectedColor
								}}>
								{page.title}
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
