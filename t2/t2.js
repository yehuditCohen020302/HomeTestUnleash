//t2.a: Implement it using recursion: 
var printNameRecursion = function (iNode) {
    return iNode.forEach(function (iNode) {
        console.log("iNode.name: ".concat(iNode.name));
        if (iNode.children) {
            iNode.children.forEach(function (child) {
                return console.log("".concat(iNode.name, ".child.name: ").concat(child.name));
            });
            return printNameRecursion(iNode.children);
        }
    });
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
var printName = function (iNode) {
    for (var i = 0; i < iNode.length; i++) {
        console.log("iNode.name: ".concat(iNode[i].name));
        if (iNode[i].children) {
            for (var j = 0; j < iNode[i].children.length; j++) {
                console.log("".concat(iNode[i].name, ".child.name: ").concat(iNode[i].children[j].name));
            }
        }
    }
};
var iNode = [
    { name: "aaa", children: [
            { name: "ccc", children: [
                    { name: "eee", children: [] }
                ] },
            { name: "ddd", children: [] }
        ] },
    { name: "bbb", children: [] }
];
printNameRecursion(iNode);
console.log("----------------");
printName(iNode);
