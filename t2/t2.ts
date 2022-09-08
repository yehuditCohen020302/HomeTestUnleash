interface INode {
    name: string;
    children: INode[];
}

//t2.a: Implement it using recursion: 
const printNameRecursion = (iNode: INode[]) => {
    return iNode.forEach(
        (iNode: INode):void => {
            console.log(`iNode.name: ${iNode.name}`);
            if (iNode.children){
                iNode.children.forEach((child)=>
                    console.log(`${iNode.name}.child.name: ${child.name}`));
                return printNameRecursion(iNode.children);
            }
        }
    );
};
/* recursion is the beautifully way to print nested objects.
in this function, the recursion print all the children of the node.
## Advantages:
-Solve problem which is naturally recursive.
-Reduce unnecessary calling of function
-Reduce the length of code
## Disadvantages:
-Slower than nonrecursive function
-Requires lots of memory
-Not more effective in terms of space and time
*/


//t2.b: Implement without recursion:
const printName=(iNode: INode[]) => {
    for (let i = 0; i < iNode.length;i++ ) {
        console.log(`iNode.name: ${iNode[i].name}`);
        if(iNode[i].children){
           for(let j = 0; j < iNode[i].children.length;j++ )
            {
                console.log(`${iNode[i].name}.child.name: ${iNode[i].children[j].name}`);
            }
        }
    }
}
/* withOut recursion is very hard way and less length of code
  but its more effective in terms of space and time
*/ 

const iNode:INode[]=[
    {name:"aaa",children:[
        {name:"ccc",children:[
                {name:"eee",children:[]}]},
        {name:"ddd",children:[]}]},
    {name:"bbb", children:[]}
];

printNameRecursion(iNode);
console.log("----------------")
printName(iNode);


