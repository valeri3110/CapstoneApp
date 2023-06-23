import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { logo } from "../assets";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
	const { mutate: login } = useLogin<CredentialResponse>({
		v3LegacyAuthProviderCompatible: true,
	});

	const GoogleButton = (): JSX.Element => {
		const divRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			if (typeof window === "undefined" || !window.google || !divRef.current) {
				return;
			}

			try {
				window.google.accounts.id.initialize({
					ux_mode: "popup",
					client_id:
						"1059059169426-vnujjsb6gj8cv1mql15odldgijl1renv.apps.googleusercontent.com",
					callback: async (res: CredentialResponse) => {
						if (res.credential) {
							login(res);
						}
					},
				});
				window.google.accounts.id.renderButton(divRef.current, {
					theme: "filled_black",
					size: "large",
					type: "standard",
				});
			} catch (error) {
				console.log(error);
			}
		}, []);

		return <div ref={divRef} />;
	};

	return (
		<Box component='div' sx={{ backgroundColor: "#FCFCFC" }}>
			<Container
				component='main'
				maxWidth='xs'
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100vh",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div>
						<img src={logo} alt='Logo' />
					</div>
					<div className='loginTitle'>Каталог Нерухомості</div>
					<Box mt={4}>
						<GoogleButton />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
