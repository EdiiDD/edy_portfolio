import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { pagesSections } from '../../pages/pagesSections';

function Navbar() {
	const backgroundColor = "#1a1a1a";
	const unselectedColor = "#ffffff";
	const hoverColor = "rgba(255, 255, 255, 0.7)";
	const navbarHeight = { xs: '56px', sm: '64px' };

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleMenuItemClick = (navigation: string) => {
		handleCloseNavMenu();
		const element = document.querySelector(navigation);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					bgcolor: backgroundColor,
					boxShadow: 'none',
					borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
				}}>
				<Container maxWidth="xl">
					<Toolbar
						disableGutters
						sx={{
							minHeight: navbarHeight,
							justifyContent: 'space-between'
						}}>
						{/* Logo para móvil */}
						<Typography
							variant="h6"
							noWrap
							sx={{
								display: { xs: 'flex', md: 'none' },
								fontSize: { xs: '1.2rem', sm: '1.5rem' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.2rem',
								color: 'inherit',
								textDecoration: 'none',
							}}>
							Edy
						</Typography>

						{/* Menú hamburguesa para móvil */}
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="menu"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								sx={{
									color: 'white',
									padding: { xs: '8px', sm: '12px' }
								}}>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
									'& .MuiPaper-root': {
										backgroundColor: backgroundColor,
										marginTop: '0.5rem',
										minWidth: '200px',
									}
								}}>
								{pagesSections.map((page) => (
									<MenuItem
										key={page.title}
										onClick={() => handleMenuItemClick(page.navigation)}
										sx={{
											color: unselectedColor,
											'&:hover': {
												backgroundColor: 'rgba(255, 255, 255, 0.08)',
											},
											padding: '12px 24px',
										}}>
										<Typography textAlign="center">
											{page.title}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						{/* Logo para desktop */}
						<Typography
							variant="h6"
							noWrap
							sx={{
								display: { xs: 'none', md: 'flex' },
								fontSize: '1.5rem',
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
								marginRight: '2rem',
							}}>
							Edy
						</Typography>

						{/* Links para desktop */}
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								gap: { md: '2rem', lg: '3rem' }
							}}>
							{pagesSections.map((page) => (
								<Link
									key={page.title}
									noWrap
									onClick={(e) => {
										e.preventDefault();
										handleMenuItemClick(page.navigation);
									}}
									underline="none"
									sx={{
										color: unselectedColor,
										fontSize: '1rem',
										transition: 'all 0.3s ease',
										position: 'relative',
										cursor: 'pointer',
										'&:hover': {
											color: hoverColor,
										},
										'&::after': {
											content: '""',
											position: 'absolute',
											width: '0',
											height: '2px',
											bottom: '-4px',
											left: '50%',
											transform: 'translateX(-50%)',
											backgroundColor: hoverColor,
											transition: 'width 0.3s ease',
										},
										'&:hover::after': {
											width: '100%',
										}
									}}>
									{page.title}
								</Link>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box
				sx={{
					height: navbarHeight,
					width: '100%'
				}}
			/>
		</>
	);
}

export default Navbar;
