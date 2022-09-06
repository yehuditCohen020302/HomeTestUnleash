async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
    //i add this row to show number
    return await 1;
}

async function run1000(): Promise<void> {
    const promises: Promise<number>[] = [];
    for(let i=0; i< 1000;i++) {
        // i add the await
        await promises.push( getNumberFromServer());
    } 
    //i add this for to show
    for(const p of promises) {
        console.log(p);
    }  
    for(const p of promises){
        await p
    }
}

console.log(run1000());