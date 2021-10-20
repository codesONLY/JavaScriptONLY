/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isSameTree = function(p, q) {
    return is_tree_equal(p, q);
    function is_tree_equal(tree1, tree2){
        if (tree1 === null && tree2 === null) return true;
        if (tree1 === null || tree2 === null) return false;
        if (tree1.val !== tree2.val) return false;
        
        const is_left_tree_equal  = is_tree_equal(tree1.left, tree2.left)
        const is_right_tree_equal = is_tree_equal(tree1.right, tree2.right)
        return is_left_tree_equal && is_right_tree_equal
    }
};
