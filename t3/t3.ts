
const printsAttributes=(attribute:string)=>{
    
   let a1= attribute.search(/ /i);
   let a2= attribute.search(/>/i);
   let b= attribute.slice(a1,a2-1);
   let new1=b.replace(/"/gi," ");
   let new2=new1.replace(/  /gi,"\n")
   let new3=new2.replace(/=/gi,":");
   
   console.log(new3);
}

const printAll=()=>{
    // const data= document.getElementById("text");
    const a=`<a href="http://example.com">`;
    const b=`<b>`;
    const c=`<div class="my-class" id="my-id">`;
    // printsAttributes(String(data));
    printsAttributes(a);
    printsAttributes(b);
    printsAttributes(c);
}

