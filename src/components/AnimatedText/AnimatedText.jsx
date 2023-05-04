import { Grid, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import latinoamerrica from "../../img/latinoamerrica.jpg";

function ImageWithText() {
  const slideIn = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(100%)" },
    config: { duration: 2000 },
  });

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <div >
    <Grid container spacing={10}>
      <Grid item xs={8} sm={5}>
        <img
          src={latinoamerrica}
          alt="Mi imagen"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ mt: 8 }}>
        <Box
          sx={{
            p: 5,
            bgcolor: "#f0f0f0",
            borderRadius: "20px",
          }}
          component={animated.div}
          style={{ ...slideIn, ...fadeIn }}
        >
          <Typography variant="h4" gutterBottom color="#17202A">
            Maiz Venture is a venture capital firm on a mission to shift LATAM
            climate change and health outcomes by investing in early stage,
            purpose driven Latin American startups.
          </Typography>
          <br />
          <br />
          <Typography variant="p" gutterBottom color="#17202A">
            BETTER OUTCOMES: Our investment philosophy is centered around
            redefining the Latin American economy for a better future for all.
            We believe in leveraging the complexity of Latin America by
            providing new sources of growth capital to smart entrepreneurs.
          </Typography>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
}

export default ImageWithText;
