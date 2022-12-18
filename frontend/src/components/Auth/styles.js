import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
   return {
      paper: {
         marginTop: theme.spacing(8),
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         padding: theme.spacing(2),
      },
      root: {
         "& .MuiTextField-root": {
           margin: theme.spacing(1),
         },
      },
      avatar: {
         margin: theme.spacing(1),
         backgroundColor: theme.palette.success.main,
      },
      form: {
         width: "100%", 
         marginTop: theme.spacing(3),
      },
      submit: {
         margin: theme.spacing(2, 0, 2),
      },
   };
});

export default useStyles;