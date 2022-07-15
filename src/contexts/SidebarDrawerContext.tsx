import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface ISidebarDrawerProvider {
	children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }) {
	const disclore = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclore.onClose();
	}, [router.asPath]);

	return (
		<SidebarDrawerContext.Provider value={disclore}>
			{children}
		</SidebarDrawerContext.Provider>
	);
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
