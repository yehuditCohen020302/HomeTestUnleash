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
                iNode.children.forEach(
                    (child)=>console.log(`${iNode.name}.child.name: ${child.name}`));
                return printNameRecursion(iNode.children);
            }
        }
    );
};

//t2.b: Implement without recursion:
const printName=(iNode: INode[]) => {
    iNode.forEach((iNode: INode):void=>{
        console.log(`iNode.name: ${iNode.name}`);
        if(iNode.children)
        {
            // while(!(iNode.children)){
                iNode.children.forEach(
                (child)=>{if((child.children))
                    console.log(`${iNode.name}.child.name: ${child.name}`)});
            // }
        }
    });
};

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


