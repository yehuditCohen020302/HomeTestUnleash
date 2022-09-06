//t2.a: Implement it using recursion: 
var printNameRecursion = function (iNode) {
    return iNode.forEach(function (iNode) {
        console.log("iNode.name: ".concat(iNode.name));
        if (iNode.children) {
            iNode.children.forEach(function (child) { return console.log("".concat(iNode.name, ".child.name: ").concat(child.name)); });
            return printNameRecursion(iNode.children);
        }
    });
};
//t2.b: Implement without recursion:
var printName = function (iNode) {
    iNode.forEach(function (iNode) {
        console.log("iNode.name: ".concat(iNode.name));
        if (iNode.children) {
            // while(!(iNode.children)){
            iNode.children.forEach(function (child) {
                if ((child.children))
                    console.log("".concat(iNode.name, ".child.name: ").concat(child.name));
            });
            // }
        }
    });
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
