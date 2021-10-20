/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var kthSmallest = function(root, k) {
    let arrayOfElements = []

    function dfs(node) {
        if(!node) return;
    
        dfs(node.left);
        arrayOfElements.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return arrayOfElements[k - 1];
};
