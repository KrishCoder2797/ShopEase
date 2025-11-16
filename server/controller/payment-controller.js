// import formidable from 'formidable';
// import https from 'https' ;

// import paytmchecksum from '../paytm/PaytmChecksum.js' ;
// import { paytmParams,paytmMerchantKey } from '../index.js';


// export const addPaymentGateway = async (request,response) =>{

//         try{
//                let paytmCheckSum  = await paytmchecksum.generateSignature(paytmParams,paytmMerchantKey) ;

//                let params = {

//                     ...paytmParams , 'CHECKSUMHASH': paytmCheckSum
//                }

//                response.status(200).json(params) ;
                

//         }catch(error){
//                 response.status(500).json({error:error.message })
//         }
// }

// export const paytmResponse = (request,response)=>{

//     const form = new formidable.IncomingForm();
//     let paytmCheckSum = request.body.CHECKSUMHASH ;
//     delete request.body.CHECKSUMHASH ;

//     let isVerifySignature = paytmchecksum.verifySignature(request.body , paytmMerchantKey,paytmCheckSum) ;

//     if(isVerifySignature){
//        let paytmParams =  {};
//        paytmParams['MID'] = request.body.MID ;
//        paytmParams['ORDERID'] = request.body.ORDERID ;

//        paytmchecksum.generateSignature(paytmParams , paytmMerchantKey).then(function(checksum){

//         paytmParams['CHECKSUMHASH'] = checksum ;

//         let post_data = JSON.stringify(paytmParams) ;

//         let options = {

//             hostname:'securegw-stage.paytm.in' ,
//             poty:443 ,
//             path: '/order/status' ,
//             header:{
//                 'Content-Type' : 'application/json' ,
//                 'Content-Length' : post_data.length, 
//             }
//         }
        
//         let res = "" ;
//         let post_req =  https.request(options,function(post_res){

//             post_res.on('data', function(chunk){
//                 res += chunk ;
//             });

//             post_res.on('end', function(){
//                 let result = JSON.stringify(res) ;
//                 response.redirect('http://localhost:3   000/')
//             })
//         });

//         post_req.write(post_data) ;
//         post_req.end() ;

//        })

//     }else{
//         console.log("CheckSum mismatched...!") ;
//     }
// }


import https from "https";
import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey } from "../index.js";

// -------------------------
// GENERATE PAYMENT REQUEST
// -------------------------
export const addPaymentGateway = async (req, res) => {
  try {
    const checksum = await paytmchecksum.generateSignature(
      req.paytmParams,
      paytmMerchantKey
    );

    const params = {
      ...req.paytmParams,
      CHECKSUMHASH: checksum,
    };

    res.status(200).json(params);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// -------------------------
// PAYTM CALLBACK HANDLER
// -------------------------
export const paytmResponse = async (req, res) => {
  try {
    const paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    const isValid = paytmchecksum.verifySignature(
      req.body,
      paytmMerchantKey,
      paytmChecksum
    );

    if (!isValid) {
      console.log("❌ Checksum mismatch");
      return res.status(400).send("Checksum mismatch");
    }

    console.log("✔ Checksum Matched");

    // Prepare Params
    const paytmParams = {
      MID: req.body.MID,
      ORDERID: req.body.ORDERID,
    };

    const checksum = await paytmchecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );

    paytmParams.CHECKSUMHASH = checksum;

    const post_data = JSON.stringify(paytmParams);

    const options = {
      hostname: "securegw-stage.paytm.in",
      port: 443,
      path: "/order/status",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": post_data.length,
      },
    };

    let responseData = "";

    const post_req = https.request(options, (post_res) => {
      post_res.on("data", (chunk) => {
        responseData += chunk;
      });

      post_res.on("end", () => {
        console.log("Paytm Status:", responseData);
        return res.redirect("http://localhost:3000/");
      });
    });

    post_req.write(post_data);
    post_req.end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};


