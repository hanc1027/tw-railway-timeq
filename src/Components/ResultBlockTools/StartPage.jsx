import Grid from "@mui/material/Grid";

const StartPage = (props) => {
  return (
    <Grid
      container
      height="100%"
    //   sx={{ backgroundColor: "rgba(175,238,238,0.2)" }}
    >
      <Grid
        item
        md={12}
        xs={12}
        justifyContent="center"
        display="flex"
        sx={{ margin: 2 }}
      >
        點選起迄站，開始查詢火車時刻
      </Grid>
    </Grid>
  );
};

export default StartPage;
