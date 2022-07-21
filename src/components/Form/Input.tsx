import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface IInput extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError | null;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
	{ name, label, error = null, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={!!error}>
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
				ref={ref}
				size={"lg"}
				{...rest}
			/>

			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export default forwardRef(Input);
