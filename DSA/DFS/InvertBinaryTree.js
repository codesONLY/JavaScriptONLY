/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var invertTree = function(root) {
     if(!root) {
        return null;
    }
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};
