const arr = ['A','B','C','D','E','F','G','H'];
// ouput = ['H','D','B','E','A','F','C','G'];
const output = [];
class binaryTree{
    constructor(value) {
        this.value =value;
        this.left = null;
        this.right = null;
    }

    addNode(value){
        if(!this.left){
            const currentNode = new binaryTree(value);
            this.left = currentNode;
        }else if(!this.right){
            const currentNode = new binaryTree(value);
            this.right = currentNode;
        }else{
            if(this.left.left && this.left.right){
                if(this.right.left && this.right.right){
                    this.left.addNode(value);
                }else{
                    this.right.addNode(value);
                }
            }else{
                this.left.addNode(value);
            }
        }
    }

    inOrder(){
        if(this.left){
            this.left.inOrder();
        }
        output.push(this.value);
        if(this.right){
            this.right.inOrder();
        }
    }
    
}

const bTree = new binaryTree('A');
arr.slice(1).forEach((ele)=>{
    bTree.addNode(ele);
})
console.log(bTree);
bTree.inOrder();

console.log(output);
