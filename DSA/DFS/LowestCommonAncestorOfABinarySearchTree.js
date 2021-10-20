/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var lowestCommonAncestor = function(root, p, q) {

let ansNode = null
if(p.val == root.val || q.val == root.val){
    return root
}
function traverse(node){
    if((p.val < node.val && q.val > node.val) || (p.val > node.val && q.val < node.val)){
        ansNode = node
        return    
    }
    else if(p.val == node.val || q.val == node.val){
        ansNode = node
        return
    }
    if(node.left)
        traverse(node.left)
    if(node.right)
        traverse(node.right)
}

if((p.val < root.val && q.val > root.val) || (p.val > root.val && q.val < root.val))
    return root
else if(p.val > root.val && q.val > root.val)
    traverse(root.right)
else if(p.val < root.val && q.val < root.val)
    traverse(root.left)

return ansNode
};
