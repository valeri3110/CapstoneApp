import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { PieChart, PropertyCard } from "components";

const Home = () => {
	const { data, isLoading, isError } = useList({
		resource: "properties",
		config: {
			pagination: {
				pageSize: 4,
			},
		},
	});

	const latestProperties = data?.data ?? [];

	if (isLoading) return <Typography>Loading...</Typography>;
	if (isError) return <Typography>Something went wrong!</Typography>;

	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color='#11142D'>
				Каталог Нерухомості
			</Typography>

			<Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
				<PieChart
					title='Продаж будинків'
					value={684}
					series={[75, 25]}
					colors={["#cc9933", "#4f4f4f"]}
				/>
				<PieChart
					title='Оренда будинків'
					value={550}
					series={[60, 40]}
					colors={["#cc9933", "#4f4f4f"]}
				/>
				<PieChart
					title='Кількість клієнтів'
					value={5684}
					series={[75, 25]}
					colors={["#cc9933", "#4f4f4f"]}
				/>
				<PieChart
					title='Доступна нерухомість'
					value={555}
					series={[75, 25]}
					colors={["#cc9933", "#4f4f4f"]}
				/>
			</Box>

			<Box
				flex={1}
				borderRadius='15px'
				padding='20px'
				bgcolor='#fcfcfc'
				display='flex'
				flexDirection='column'
				minWidth='100%'
				mt='25px'
			>
				<Typography fontSize='14px' color='#808191'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</Typography>
			</Box>

			<Box
				flex={1}
				borderRadius='15px'
				padding='20px'
				bgcolor='#fcfcfc'
				display='flex'
				flexDirection='column'
				minWidth='100%'
				mt='25px'
			>
				<Typography fontSize='18px' fontWeight={600} color='#11142d'>
					Нова Нерухомість
				</Typography>

				<Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
					{latestProperties.map((property) => (
						<PropertyCard
							key={property._id}
							id={property._id}
							title={property.title}
							location={property.location}
							price={property.price}
							photo={property.photo}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
