import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../components/Form/Input";

type ISignInFormData = {
	email: string;
	password: string;
};

const singInFormSchema = yup.object().shape({
	email: yup.string().required("Email obrigatório").email("Email inválido"),
	password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<ISignInFormData>({
		resolver: yupResolver(singInFormSchema),
	});

	const handleSignIn: SubmitHandler<ISignInFormData> = (data) => {
		console.log(data);
	};

	return (
		<Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
			<Flex
				as="form"
				w="100%"
				maxW={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={4}>
					<Input
						name="email"
						type={"email"}
						label="Email"
						error={errors.email}
						{...register("email")}
					/>

					<Input
						name="password"
						type={"password"}
						error={errors.password}
						label="Senha"
						{...register("password")}
					/>
				</Stack>
				<Button
					type="submit"
					mt="6"
					colorScheme={"pink"}
					size={"lg"}
					isLoading={isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
