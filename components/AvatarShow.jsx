import React from "react";
import { Box } from "@adminjs/design-system";

const AvatarShow = (props) => {
  const { record, property } = props;
  const srcValue = record.params[property.name];

  if (!srcValue) {
    return (
      <Box>
        <Box>No avatar uploaded</Box>
      </Box>
    );
  }

  return (
    <Box>
      <Box>
        <img
          src={srcValue}
          alt="User avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default AvatarShow;
