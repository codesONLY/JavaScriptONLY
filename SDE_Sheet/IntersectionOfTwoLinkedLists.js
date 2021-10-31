/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let shortList
    let longList
    let sizeA = headA
    let sizeB = headB
    let lengthA = 0 
    let lengthB = 0
    while (sizeA!==null || sizeB!==null){
        if(sizeA !== null) {
            sizeA = sizeA.next
            lengthA ++
        }
        if(sizeB !==null) {
            sizeB = sizeB.next
            lengthB ++
        }
    }
    //starts the longest list index, to the starting point of short list
    //the idea is that an intersection of a node will ALWAYS be at the end. 
    //therefore, SAME SIZE lists will reach the intersection value at the same time
    let sizeDiff = Math.abs(lengthA - lengthB)
    
    if(lengthB > lengthA) {
        shortList = headA
        longList = headB
    } else {
        shortList = headB
        longList = headA  
    }
    
    while(shortList.next !== null || longList.next !== null){
        if(sizeDiff<1){
          if(shortList === longList) return shortList
          shortList = shortList.next
        } 
         longList = longList.next
         sizeDiff--
    }
    //catch any 1 length lists
    if(shortList === longList) return shortList
    return shortList.next
};
