import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
      },
   },
    appBar: {
      borderRadius: 15,
      margin: "30px 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
    },
    heading: {
      color: "#2192FF",
    },
    image: {
      marginLeft: "15px",
    },    
  };
});

export default useStyles;
    

