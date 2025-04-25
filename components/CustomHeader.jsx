import React from "react";
import { Box, Header, H5, Avatar, Text } from "@adminjs/design-system";
import { useCurrentAdmin } from "adminjs";

const CustomHeader = () => {
  const { currentAdmin } = useCurrentAdmin();

  return (
    <Header>
      <Box flex alignItems="center" justifyContent="space-between" width="100%">
        <H5>Assort Tech Admin Panel</H5>
        {currentAdmin && (
          <Box flex alignItems="center">
            <Text mr="default">{currentAdmin.email}</Text>
            {currentAdmin.avatar ? (
              <Avatar src={currentAdmin.avatar} />
            ) : (
              <Avatar initials={currentAdmin.email[0].toUpperCase()} />
            )}
          </Box>
        )}
      </Box>
    </Header>
  );
};

export default CustomHeader;
