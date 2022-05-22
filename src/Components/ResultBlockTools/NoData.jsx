import Grid from "@mui/material/Grid";

const NoData = (props)=>{
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
            查無資料，請重新查詢。
          </Grid>
        </Grid>
      );
}

export default NoData