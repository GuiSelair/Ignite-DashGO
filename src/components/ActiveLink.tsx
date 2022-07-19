import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface IActiveLink extends LinkProps {
	children: ReactElement;
	shouldMatchExactHref?: boolean;
}

function ActiveLink({ children, shouldMatchExactHref, ...rest }: IActiveLink) {
	let isActive = false;
	const router = useRouter();

	if (
		shouldMatchExactHref &&
		(router.asPath === rest.href || router.asPath === rest.as)
	)
		isActive = true;

	if (
		!shouldMatchExactHref &&
		(router.asPath.startsWith(String(rest.href)) ||
			router.asPath.startsWith(String(rest.as)))
	)
		isActive = true;

	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? "pink.400" : "gray.50",
			})}
		</Link>
	);
}

export default ActiveLink;
