import React, { useContext } from "react";
import { useGetIdentity } from "@refinedev/core";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ColorModeContext } from "../../../contexts/color-mode";
import { IconButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

export const Header: React.FC = () => {
	const { data: user } = useGetIdentity({
		v3LegacyAuthProviderCompatible: true,
	});
	const showUserInfo = user && (user.name || user.avatar);
	const { mode, setMode } = useContext(ColorModeContext);

	return (
		<AppBar
			color='default'
			position='sticky'
			elevation={0}
			sx={{ background: "#cc9933" }}
		>
			<Toolbar>
				<Stack
					direction='row'
					width='100%'
                    gap='16px'
					justifyContent='flex-end'
					alignItems='center'
				>
					<IconButton
						color='inherit'
						onClick={() => {
							setMode();
						}}
					>
						{mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
					</IconButton>
					{showUserInfo && (
						<Stack direction='row' gap='16px' alignItems='center'>
							{user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
							{user.name && (
								<Typography variant='subtitle2'>{user?.name}</Typography>
							)}
						</Stack>
					)}
				</Stack>
			</Toolbar>
		</AppBar>
	);
};



