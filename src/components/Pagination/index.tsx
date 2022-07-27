import { Box, Button, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface IPagination {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => from + index + 1)
		.filter((page) => page > 0);
}

export default function Pagination({
	onPageChange,
	totalCountOfRegisters,
	currentPage = 1,
	registersPerPage = 10,
}: IPagination) {
	const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

	const previousPages =
		currentPage > 1
			? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
			: [];

	const nextPages =
		currentPage < lastPage
			? generatePagesArray(
					currentPage,
					Math.min(currentPage + siblingsCount, lastPage),
			  )
			: [];

	return (
		<Stack
			direction={["column", "row"]}
			mt="8"
			justify={"space-between"}
			align="center"
			spacing={6}
		>
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>
			<Stack direction={"row"} spacing="2">
				{currentPage > 1 + siblingsCount && (
					<>
						<PaginationItem number={1} />
						{currentPage > 2 + siblingsCount && (
							<Text color="gray.300" w="8" textAlign={"center"}>
								...
							</Text>
						)}
					</>
				)}
				{previousPages.length > 0 &&
					previousPages.map((page) => (
						<PaginationItem key={page} number={page} />
					))}
				<PaginationItem number={currentPage} isCurrent />
				{nextPages.length > 0 &&
					nextPages.map((page) => <PaginationItem key={page} number={page} />)}

				{currentPage + siblingsCount < lastPage && (
					<>
						{currentPage + siblingsCount + 1 < lastPage && (
							<Text color="gray.300" w="8" textAlign={"center"}>
								...
							</Text>
						)}
						<PaginationItem number={lastPage} />
					</>
				)}
			</Stack>
		</Stack>
	);
}
