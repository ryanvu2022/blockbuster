import { makeStyles } from "tss-react/mui";
import { red } from "@mui/material/colors";

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
      googleButton: {
         marginBottom: theme.spacing(2),
         backgroundColor: red,
      },
   };
});

export default useStyles;