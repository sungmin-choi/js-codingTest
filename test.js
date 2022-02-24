function test3(insertEdges, removeEdges) {
  let size = 0;
  insertEdges.forEach((edge)=>{
    const [node1,node2] = edge;
    if(size<node1) size = node1;
    if(size<node2) size = node2;
  })
let matrix = Array(size+1).fill(0).map(()=>Array(size+1).fill(0));
 insertEdges.forEach((edge)=>{
    const [node1,node2] = edge;
    matrix[node1][node2] =1;
    matrix[node2][node1] =1;
 })
 removeEdges.forEach((edge)=>{
   const [node1,node2] = edge;
    matrix[node1][node2] =0;
    matrix[node2][node1] =0;
 })

 return matrix;

}

const insertEdges = [
  [0, 3],
  [0, 2],
  [1, 3],
  [2, 1],
];
const removeEdges = [[1, 3], [1, 0]];
let output1 = test3(insertEdges, removeEdges);

console.log(output1);