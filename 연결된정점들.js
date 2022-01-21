class makeList{
    constructor(){
      this.vertices = {};
    }
  
      addVertex(vertex) {
      if(!this.vertices[vertex]){
        this.vertices[vertex] = [];
      }
      }
  
        contains(vertex) {
          return !!this.vertices[vertex];
      }
  
      addEdge(fromVertex, toVertex) {
          if (!this.contains(fromVertex) || !this.contains(toVertex)) {
              return;
          }
          if (!this.hasEdge(fromVertex, toVertex)) {
        this.vertices[fromVertex].push(toVertex);
          }
          if (!this.hasEdge(toVertex, fromVertex)) {
         this.vertices[toVertex].push(fromVertex);
          }
      }
  
      hasEdge(fromVertex, toVertex) {
          if (!this.contains(fromVertex)) {
              return false;
          }
          return !!this.vertices[fromVertex].includes(toVertex);
      }
  
  }
  
  function dfs(nodeList,adjList){
    const visited = {};
    let count =0;
  
    Object.keys(nodeList).forEach((node)=>{
      if(!visited[node]){ 
      let q=[];
      q.push(node);
      while(q.length>0){
        const popNode = q.pop();
        visited[popNode] = true;
        adjList.vertices[popNode].map((ele)=>{
          if(!visited[ele]){
            q.push(ele);
          }
        })
  
      }
      count++;
      }
    })
    return count;
  }
  
  function connectedVertices(edges) {
    const adjList = new makeList();
    const nodeList = {};
    edges.forEach((edge)=>{
      const [from,to] = edge;
      if(!nodeList[from]) nodeList[from] = true;
      if(!nodeList[to]) nodeList[to] = true;
      adjList.addVertex(from);
      adjList.addVertex(to);
      adjList.addEdge(from,to);
    })
    
    return dfs(nodeList,adjList);
  }

const result = connectedVertices([
	[0, 1],
	[2, 3],
	[4, 5],
]);
console.log(result);