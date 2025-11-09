// Using Grid View Problem Occured

// import { useEffect } from 'react';
// import {useDispatch , useSelector} from 'react-redux' ;
// import { useParams } from 'react-router-dom';
// import {Box , Typography , styled , Grid} from '@mui/material' ;

// import {getProductDetails} from '../../redux/actions/productActions' ;
// import ActionItem from './ActionItem';

// const Component = styled(Box)`
//       background : #F2F2F2 ;
//       margin-top :55px ;
// ` ;

// const Container = styled(Grid)`

//     background: #FFFFFF ;
//     display:flex ;


// ` ;

// const RightContainer = styled(Grid)`

//     margin-top:50px ;
// ` ;



// const DetailView = () =>{

//   const dispatch = useDispatch() ;
//   const {id} = useParams() ;

//  const {loading , product} = useSelector(state=> state.getProductDetails);

//  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' ;
  
//   useEffect(()=>{
//     if (product && id !== product.id)
//         dispatch(getProductDetails(id)) ;
//   },[dispatch,id , product , loading])

//     return (
//     <Component>
//         {
//            product && Object.keys(product).length &&
//               <Container  container >

//                   <Grid item lg={4} md={4} sm={8} xs={12}  >
//                      < ActionItem  product = {product}/>
//                   </Grid>

//                   <RightContainer item lg={8} md={8} sm={8} xs={12} >
//                         <Typography>{product.title.longTitle }</Typography>
//                         <Typography style={{marginTop:5 , color:'#878787' , fontSize:14 }}>
//                           8 Rating and 1 Reviews 
//                           <Box component="span"><img src={fassured} style={{width:77, marginLeft:20}}  /></Box>
//                         </Typography>
//                         <Typography>
//                               <Box component="span"style={{fontSize:28}} >₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
//                               <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
//                               <Box component="span" style={{color:'green'}}>{product.price.discount}</Box>
//                         </Typography>


//                   </RightContainer>

//               </Container>
//         }
//     </Component>  
//   )
// }

// export default DetailView ;



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography, styled, Grid } from "@mui/material";

import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
  padding: 20px;
`;

const Container = styled(Grid)`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RightContainer = styled(Box)`
  margin-top: 50px;
  padding: 20px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length > 0 && (
        <Container container spacing={2}>
          
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>

         
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <RightContainer>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {product.title.longTitle}
              </Typography>

              <Typography sx={{ marginTop: 1, color: "#878787", fontSize: 14 }}>
                8 Ratings & 1 Review
                <Box component="span">
                  <img
                    src={fassured}
                    alt="fassured"
                    style={{ width: 77, marginLeft: 20, verticalAlign: "middle" }}
                  />
                </Box>
              </Typography>

              <Typography sx={{ marginTop: 2 }}>
                <Box component="span" sx={{ fontSize: 28, fontWeight: 600 }}>
                  ₹{product.price.cost}
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box component="span" sx={{ color: "#878787" }}>
                  <strike>₹{product.price.mrp}</strike>
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box component="span" sx={{ color: "green" }}>
                  {product.price.discount}
                </Box>
              </Typography>
            </RightContainer>
          </Grid>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
  