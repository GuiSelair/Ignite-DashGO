import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type IProfile = {
	showProfileData?: boolean;
};

export default function Profile({ showProfileData = false }: IProfile) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Guilherme Selair</Text>
					<Text color="gray.300" fontSize="small">
						contato@guilhermeselair.dev
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Guilherme Selair"
				src="https://www.github.com/guiselair.png"
			/>
		</Flex>
	);
}
