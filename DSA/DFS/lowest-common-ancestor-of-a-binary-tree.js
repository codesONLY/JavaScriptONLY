/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var lowestCommonAncestor = function(root, p, q) {
     if(!root) {
        return null;
    }
    const left = lowestCommonAncestor(root.left, p, q),
          right = lowestCommonAncestor(root.right, p, q);
    if((left && right) || root.val === p.val || root.val === q.val) {
        return root;
    } 
    else if(left) {    
        return left;
    } 
    else if(right) { 
        return right;
    }
    return null;
};
