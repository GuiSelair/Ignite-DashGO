import {
	Box,
	Flex,
	Heading,
	Button,
	Divider,
	VStack,
	SimpleGrid,
	HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

type ICreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

const createUserValidationSchema = yup.object().shape({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().required("Email obrigatório").email("Email inválido"),
	password: yup.string().required("Senha obrigatória"),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "As senhas devem ser iguais")
		.required("Confirmação obrigatória"),
});

export default function CreateUser() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ICreateUserFormData>({
		resolver: yupResolver(createUserValidationSchema),
	});

	const handleSignUp: SubmitHandler<ICreateUserFormData> = (data) => {
		console.log(data);
	};

	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box
					as="form"
					onSubmit={handleSubmit(handleSignUp)}
					flex="1"
					borderRadius={8}
					bg="gray.800"
					p={["6", "8"]}
				>
					<Heading size={"lg"} fontWeight="normal">
						Criar usuário
					</Heading>
					<Divider my="6" borderColor={"gray.700"} />
					<VStack spacing={8}>
						<SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
							<Input
								name="name"
								label="Nome completo"
								{...register("name")}
								error={errors.name}
							/>
							<Input
								name="email"
								type={"email"}
								label="E-mail"
								{...register("email")}
								error={errors.email}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
							<Input
								name="password"
								type="password"
								label="Senha"
								{...register("password")}
								error={errors.password}
							/>
							<Input
								name="password_confirmation"
								label="Confirmação de senha"
								type="password"
								{...register("password_confirmation")}
								error={errors.password_confirmation}
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt="8" justify={"flex-end"}>
						<HStack spacing={"4"}>
							<Link href="/users" passHref>
								<Button as="a" colorScheme={"whiteAlpha"}>
									Cancelar
								</Button>
							</Link>
							<Button
								type="submit"
								colorScheme={"pink"}
								isLoading={isSubmitting}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
