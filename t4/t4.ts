/*The problem in the method run1000- that is called to func that return promises
and when pushed to the promises array will be push in it promises that not returned yet.
so, I change the code for solves this problem.
Before push to array by calling to the func...
I add an await, that will be promise that all promises will be returned.
*/
async function getNumberFromServer(): Promise<number> {
    // some api call to return a number from a remote server
     return await 3;
}
async function run1000(): Promise<void> {
    const promises: Promise<number>[] = [];
   for(let i=0; i< 1000;i++) {
       // I add the await
       await promises.push(getNumberFromServer());
   } 
   for(const p of promises){
     await p; 

    //I add this row because I want to see
    console.log( p); 
    }

}
console.log( run1000());
