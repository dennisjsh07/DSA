// better solution... (TC = O(n), SC = O(n))
function mergeSortedArray(){
    let ans = [];
    let i = 0;
    let j = 0;

    if(m === 0){
        ans.push(...nums2);
    }
    else if(n === 0){
        ans.push(...nums1);
    }
    else{
        while(i < m && j < n){
            if(nums1[i] <= nums2[j]){
                ans.push(nums1[i]);
                i++;
            } else{
                ans.push(nums2[j]);
                j++;
            }
        }

        while(i < m){
            ans.push(nums1[i]);
            i++;
        }

        while(j < n){
            ans.push(nums2[j]);
            j++;
        }
    }

    return ans;
};

// optimal solution... (TC = O(n), SC = O(1))
function mergeSortedArray(){
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    
    while(i >= 0 && j >=0){
      if(nums1[i] >= nums2[j]){
        nums1[k] = nums1[i];
        i--;
      } else{
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
    
    while(i >= 0){
      nums1[k] = nums1[i];
      i--;
      k--;
    }
    
    while(j >= 0){
      nums1[k] = nums2[j];
      j--;
      k--
    }
    
    return nums1;
};
  

let nums1 = [1,2,3,0,0,0]; 
let m = 3; 
let nums2 = [2,5,6]; 
let n = 3

let merge = mergeSortedArray();
console.log(merge);
