function peakOfArray(){
    var low = 0;
    var high = mountainArr.length-1;
    
    while(low<=high){
      var mid = Math.floor((low+high)/2);
      if((mid === low || mountainArr[mid]>mountainArr[mid-1]) && (mid === high || mountainArr[mid]>mountainArr[mid+1])){
        return (mid);
        break;
      } else if(mid>low && mountainArr[mid-1]>mountainArr[mid]){
        high = mid-1;
      } else{
        low = mid+1;
      }
      
    }
    }
    
    function firstHalf(){
    var low = 0;
    var high = peak;
    target = 3;
    var flag = false;
    while(low<=high){
      var mid = Math.floor((low+high)/2);
      if(mountainArr[mid] === target){
        return (mid);
        flag = true;
        break;
      } else if(target<mountainArr[mid]){
        high = mid-1;
      } else{
        low = mid+1;
      }
    }
    if(flag === false){
      return -1;
    }
    }
    
    function secondHalf(){
    var low = peak;
    var high = mountainArr.length-1;
    target = 3;
    var flag = false;
    while(low<=high){
      var mid = Math.floor((low+high)/2);
      if(mountainArr[mid] === target){
        return (mid);
        flag = true;
        break;
      } else if(target<mountainArr[mid]){
        low = mid+1;
      } else{
        high = mid-1;
      }
    }
    if(flag === false){
      return -1;
    }
    }
    
    var mountainArr = [0,1,2,4,2,1];
    var target = 3;
    
    var peak = peakOfArray(mountainArr);
    // console.log(peak);
    
    var firstIndex = firstHalf(mountainArr);
    // console.log(firstIndex);
    
    var secondIndex = secondHalf(mountainArr);
    // console.log(secondIndex);
    
    if (firstIndex !== -1) {
      console.log(firstIndex);
    } else if (secondIndex !== -1) {
      console.log(secondIndex);
    } else {
      console.log(-1);
    }
    