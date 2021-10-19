var isValidBST = function (root) {


    function helper(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

        let left = helper(node.left, min, node.val);
        let right = helper(node.right, node.val, max)

        return left && right

    }

    return helper(root, -Infinity, Infinity)
};