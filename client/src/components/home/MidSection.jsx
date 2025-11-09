// import { Grid} from "@mui/material";

// // Custom Import 

// import { imageURL } from "../../constants/data";


// const MidSection = ()=>{

//     return (
//         <Grid lg={12} sm={12} md={12} xs={12} container>
//             {
//                 imageURL.map(image => (
//                     <Grid item lg={4} md={4} sm={12} xs= {12}>
    
//                     <img src={image} alt="image" style={{width:'100%'}} />

//                     </Grid>
//                     ))
//             }
//         </Grid>
//     )
// }

// export default MidSection ;

import { Box, styled } from "@mui/material";
import { imageURL } from "../../constants/data";

const Image = styled("img")(({theme})=>({

    marginTop:10 ,
    width:'100%',
    display:'flex',
    justifyContent:'space-between' ,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:120
    }

}));

const MidSection = () => {

  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (

    <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",       
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",     
        paddingX: "10px",
        marginTop:"10px"
      }}
    >
      {imageURL.map((image, index) => (
        <Box
          key={index}
          sx={{
            flex: "1 1 calc(33.33% - 16px)", 
            marginBottom: "10px",
          }}
        >
          <img
            src={image}
            alt={`image-${index}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Box>

      <Image src={url} alt="covid" />

    </>
  );
};

export default MidSection;



