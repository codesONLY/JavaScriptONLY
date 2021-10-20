/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var binaryTreePaths = function(root) {
    let allAr = [];
    getPath(root);
    function getPath(node,arr=[]){
        (!node.left && !node.right) &&allAr.push([...arr, node.val]);        
        node.left && getPath(node.left, [...arr,node.val]);
        node.right && getPath(node.right, [...arr,node.val]);      
    }
    return allAr.map((a)=>a.join('->'));
};
