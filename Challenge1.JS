function getRelationship(x, y) {
    // Your code goes here!

    // used if conditions to check if both parameters are Numbers
    if (isNaN(x)===false && isNaN(y)===false )
    {
        // saved values of x and y in new variables, otherwise x and y will take 'false' as a value
        var a = x;
        var b = y;
        if (a===b)      // compares both numbers for equality
        {
        var str = "=";
        return str;
        }
        else if (a<b)   // check if a is smaaler than b
        {
        var less = "<";
        return less;
        }
        else if (a>b)   // check if b is smaaler than a
        {
        var greater = ">";
        return greater;
        }
    }
    // else condition check if atleast one parameter is NaN
    else
    {
        if (isNaN(x)===true && isNaN(y)===true )
          // checked if both parameters are NaN
      {
          var third = "Can't compare relationships because" + " " + x + " and " + y + " are not numbers";
          return third;
      }
      else if (isNaN(x)===true)
        // checked if only x is NaN, regardless of y 
      {
          var first = "Can't compare relationships because " + x + " is not a number";
          return first;
      }
      else if (isNaN(y)===true)
        // checked if only y is NaN, regardless of x
      {
          var second = "Can't compare relationships because " + y + " is not a number";
          return second;
      }
      else if(x!== 'undefined' && y!== 'undefined' )
        // checked if both parameters are not undefined
       {
          var sixth = "Can't compare relationships because " + x + " and "+ y + " are not numbers";
          return sixth;
      }
      else if (x!== 'undefined')
        // checked if only x is not undefined, regardless of y 
      {
          var fourth = "Can't compare relationships because either " + x + " or "+ y + " is undefined and is not a number";
          return fourth;
      }
      else if ( y!== 'undefined' )
        // checked if only y is not undefined, regardless of x 
       {
          var fifth = "Can't compare relationships because either " + x + " or "+ y + " is undefined and is not a number";
          return fifth;
      }
   }
        
}

// Try logging these functions to test your code!
console.log(getRelationship(6,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
