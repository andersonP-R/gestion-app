import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, Grid, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  description: string;
  url: string;
}

export const CardComponent: FC<PropsWithChildren<Props>> = ({
  children,
  description = "",
  url = "",
}) => {
  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    navigate(url);
  };

  return (
    <Grid item>
      <Card
        sx={{
          backgroundColor: "#eee",
          minWidth: "100px",
        }}
        onMouseEnter={() => console.log("pre fetching here")}
        onClick={() => handleRedirect(url)}
      >
        <CardActionArea
          sx={{
            fontSize: "2rem",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {children}
          <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
            {description}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
