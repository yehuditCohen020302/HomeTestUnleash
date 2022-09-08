/*Write an express middleware that returns a JSON 
with the SHA256 hash 
of the request body.
*/
// The result:

var CryptoJS = require("crypto-js");


app.use((req,res,next) =>{
    
    const hash2 = CryptoJS.HmacSHA256(req.body,'sha256'); 
    res.sendFile(JSON.stringify(hash2));
});




