# Sorting algorithms implementation in javascript

## Javascript array function library

#### Remove duplicates in an array
```javascript
var array = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
function removeDuplicate(array){
  var uniqueNames = [];
  $.each(names, function(i, el){
      if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
  });
  return uniqueNames;
}
```


#### Calculate execution time in JS
```javascript
var startTime = new Date().getTime();
function functionExecution();
var endTime = new Date().getTime();
var executionTime = endTime - startTime;
console.log(executionTime);
```
