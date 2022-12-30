//Pivot & Partition
//Pivot :- a pivot can be a 1.Random,2.Median,3.First or 4.Last element of the array.

let arr = [6,3,9,5,2,8];
/** 
 * if here we took the last element as the pivot is 8 then with the help of partion function we wil going to
arrange elements who less than pivot in it's left side and element greater then it will
going to get arrange at the right side of it and after this the element present in left side of pivot
will going to work with the same partition function like before but there the pivot will going to be one of the
element present in that left side.
Here, the partition function does the job of finding pivot and then it arranges that pivot to its
sorted position and it will going to return the sorted index of pivot.

            pivot= 8 then //result [2,3,5,6,8,9]
              8 // swap [2,3,5,6,8,9]
    [6,3,5,2]   [9]//here an individual element is sorted in itself.
           ^
           |
           2 // swap [2,3,5,6]
no need       [6,3,5]// swap [3,5,6]
                   ^
                   |
                   5
                [3] [6]

      pivot was choosen to do the task of comparison which will help us to 
      swap the elements so internally there is swapping is going to take place
 * 
time complexity :- worst case occurs when pivot is always smallest or largest element of array.
worst case happen if array is already sorted in ascending or descending or other reasons because of which
recursion tree went too deep. 
it does not require any extra space like merge sort so it is more preferred
worst case :- O(n^2)
average :- O(nlogn)
 */