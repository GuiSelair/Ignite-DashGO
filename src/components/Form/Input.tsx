import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

interface IInput extends ChakraInputProps {
	name: string;
	label?: string;
}

export default function Input({ name, label, ...rest }: IInput) {
	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				id={name}
				name={name}
				focusBorderColor="pink.500"
				bgColor={"gray.900"}
				variant="filled"
				_hover={{
					bgColor: "gray.900",
				}}
				size={"lg"}
				{...rest}
			/>
		</FormControl>
	);
}
