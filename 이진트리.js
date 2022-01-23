class BinarySearchTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value) {
      if (value < this.value) {
        if (this.left === null) this.left = new BinarySearchTree(value);
        else this.left.insert(value);

      } else if (value > this.value) {
        if (this.right === null) this.right = new BinarySearchTree(value);
        else this.right.insert(value);
      } 
    }

    contains(value) {
      if (value === this.value)  return true;

      if (value < this.value) {
        if(this.left)return this.left.contains(value);
        else return false;
      }
      if (value > this.value) {
        if(this.right) return this.right.contains(value);
        else return false;
      }
      return false;
    }
  
      /*
      트리의 순회에 대해 구현을 합니다.
    지금 만드려고 하는 이 순회 메서드는 단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 합니다.
    전위 순회를 통해 어떻게 탐색하는지 이해를 한다면 중위와 후위 순회는 쉽게 다가올 것입니다.
      */
  
      // 이진 탐색 트리를 전위 순회하는 메서드를 만듭니다.
    preorder(callback) {
      callback(this.value);
      if (this.left) {
        this.left.preorder(callback);
      };
      if (this.right) {
        this.right.preorder(callback);
      };
    }
  
      // 이진 탐색 트리를 중위 순회하는 메서드를 만듭니다.
    inorder(callback) {
        if (this.left) {
            this.left.inorder(callback);
          };
          callback(this.value);
          if (this.right) {
            this.right.inorder(callback);
          };
    }
  
      // 이진 탐색 트리를 후위 순회하는 메서드를 만듭니다.
    postorder(callback) {
          //TODO: 전위 순회를 바탕으로 후위 순회를 구현하세요.
    }
  
  }

  let arr = [];
  let cb = function (value) {
    arr.push(value);
  };
  const rootNode = new BinarySearchTree(10);
  rootNode.insert(8);
  rootNode.insert(3);
  rootNode.insert(7);
  rootNode.insert(5);
  rootNode.insert(15);
  rootNode.insert(16);
  rootNode.insert(11);
  rootNode.insert(14);
  rootNode.inorder(cb);
  console.log(arr);