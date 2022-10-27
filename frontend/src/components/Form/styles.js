import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
   return {
      root: {
         "& .MuiTextField-root": {
            margin: theme.spacing(1),
         },
      },
      paper: {
         padding: theme.spacing(2),
      },
      form: {
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "center",
      },
      fileInput: {
         width: "97%",
         margin: "10px 0",
      },
      buttonSubmit: {
         marginBottom: 10,
      },
   };
});

export default useStyles;
