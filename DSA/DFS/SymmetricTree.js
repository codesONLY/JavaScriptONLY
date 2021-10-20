/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isSymmetric = function(root) {
if(!root.left && !root.right)
    return true
if((root.left && !root.right) || (!root.left && root.right))
    return false
let ans = true
function traverse(nodeL,nodeR){
    if(nodeL.val != nodeR.val)
        ans = false
    if(nodeL.left && nodeR.right)
        traverse(nodeL.left,nodeR.right)
    else if((!nodeL.left && nodeR.right) || (nodeL.left && !nodeR.right))
        ans = false
    if(nodeL.right && nodeR.left)
        traverse(nodeL.right, nodeR.left)
    else if((!nodeL.right && nodeR.left) || (nodeL.right && !nodeR.left))
        ans = false
}
traverse(root.left,root.right)
return ans
};
