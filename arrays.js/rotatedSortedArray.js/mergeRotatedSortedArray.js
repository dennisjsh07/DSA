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

let nums1 = [1,2,3,0,0,0]; 
let m = 3; 
let nums2 = [2,5,6]; 
let n = 3

let merge = mergeSortedArray();
console.log(merge);
