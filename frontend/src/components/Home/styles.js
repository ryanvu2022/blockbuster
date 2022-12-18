import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
   return {
      root: {
         [theme.breakpoints.down("md")]: {
         flexDirection: "column-reverse",
         },
      },
   };
});

export default useStyles;
    

