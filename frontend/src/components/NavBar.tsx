import { Box, Flex, Heading, Link, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useLogoutUserMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "./_isServer";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data: meData, fetching: meFetching }] = useMeQuery({
    pause: isServer(),
  });
  const [
    { fetching: logoutUserFetching },
    logoutUser,
  ] = useLogoutUserMutation();

  return (
    <Flex
      bg="purple.500"
      p={4}
      ml={"auto"}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"whitesmoke"}
    >
      <Heading>Reddit-Clone</Heading>
      {!!meFetching ? null : meData?.me ? (
        <Flex>
          <Text>Hello, {meData.me.username}</Text>
          <Button
            variant="link"
            ml={2}
            onClick={() => logoutUser()}
            isLoading={logoutUserFetching}
          >
            logout
          </Button>
        </Flex>
      ) : (
        <Box>
          <NextLink href="/login">
            <Link>Login</Link>
          </NextLink>
        </Box>
      )}
    </Flex>
  );
};

export default NavBar;
