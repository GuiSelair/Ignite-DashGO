import {
	Icon,
	Link,
	Text,
	LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLink extends ChakraLinkProps {
	children: string;
	icon: ElementType;
}

export default function NavLink({ children, icon, ...rest }: INavLink) {
	return (
		<Link display="flex" alignItems="center" {...rest}>
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{children}
			</Text>
		</Link>
	);
}
