import { Box, CircularProgress } from "@mui/material";

export const FullScreenLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "absolute",
        backgroundColor: "#ffffffb9",
      }}
    >
      <CircularProgress thickness={2} color="info" />
    </Box>
  );
};
