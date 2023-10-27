/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var findMode = function(r) {
  const map = new Map()
  const maxMap = new Map()
  let max = -Infinity
  
  function dfs(root){
    if(!root) return
    map.set(root.val, (map.get(root.val) || 0) + 1)
      if(map.get(root.val) >= max){
        max = map.get(root.val)
        if(!maxMap.get(max)) maxMap.set(max, new Set())
        maxMap.get(max).add(root.val)
      }    
    dfs(root.left)
    dfs(root.right)
  } 
  
  dfs(r)
  return [...maxMap.get(max)]
};
