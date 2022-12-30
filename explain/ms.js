/*
merge sort 
divide & conquer
let arr = [8,5,9,13,-1,2,0];
what merge sort does ,it divides the whole array in to subarray and then merger them in sorted order
so how it does this
let's see. In our give array it will going to divide it like this
                    [8,5,9,13]                         [-1,2,0]
                [8,5]        [9,13]                [-1,2]     [0]/here we know that a single element is sorted
              [8]   [5]      [9]  [13]            [-1]  [2]        in itself/
now comes                             merging phase
the task           [5,8]    [9,13]                      [-1,2]  [0]
                      [5,8,9,13]                           [-1,0,2]
of merging                          [-1,0,2,5,8,9,13]
them                  here we will do comparison while merging two of more element

divide & conquer :- Here first we have divided the array in subparts and then we conquer them by 
merging all elements.
*/