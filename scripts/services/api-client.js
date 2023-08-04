// Network call 
import URL from "../utils/constant.js";
  export async function  doNetworkCall(){
   
  try{ 
  const response=await fetch(URL) // block  behaving as syn so using try catch 
  const object=await response.json();
return object; // wrap promise   
} catch(err){
   console.log('some problem is api call',err);
throw err;  // throw error to caal back function  
}
// const p=doNetwork();
// p.then()
   
   
     
  
  
  
  
  
  // old method :              callback hell :: fun-funct
    //   const promise=fetch(URL);
   //   console.log('promise is ',promise);
   //   promise.then(function(response){
   //      console.log(response);
   //      const promise2=response.json(); //  deserialization JSON TO OBJECT (take time so promise2)
   //      promise2.then(data=>console.log('data is ',data))
   //      .catch(e=> cosnnol .log('json parse error ',e)) 
   //   }).catch(function(error){
   //      console.log("error is ",error);
   //   });
   //   console.log('Good Bye') ;  // serialization :: OBJECT TO JSON (which is a string) method
 
}
export default doNetworkCall;