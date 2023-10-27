/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var minDiffInBST = function(root) {
    let min = Number.MAX_VALUE
let arr = []
function traverse(node){
    if(node.left)
        traverse(node.left)
    arr.push(node.val)
    if(node.right)
        traverse(node.right)
}
traverse(root)
for(let i = arr.length - 1 ; i > 0 ; i--){
    if(arr[i] - arr[i-1] < min){
        min = arr[i] - arr[i-1]
    }
}
return min
};
