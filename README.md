#Addin Numeric BR


##addIn created to format numbers in money BR(#,###.00), for CTools datatable component.


* **Instalation**
 - 1 - Insert a "JavaScript Function component" 
 - 2 - Insert the code of file numericBR in this component.


* **Usage**
 ***Default***
 - In your table Component, insert the propertie "Column Types" the value 'numericBR' 
 
 ***Remove Cents*** 
  - Case you need remove cents from money apply this function in "Pre Execution" propertie.
   ```JavaScript
   function f() {  
       this.setAddInOptions('colType','numericBR',function(state){
          // if(state.colIdx == 1){ // for a specific column
               return {
                   decimal: false
               };
           // }
       });
   }
   ```
   *Contribution by juliano.segoa@gmail.com*
    

That's it! 
