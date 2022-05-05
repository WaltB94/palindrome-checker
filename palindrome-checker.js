function palindrome(str) {


    let duplicado =  str.slice().toString().toLowerCase().replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, '').split("").reverse().join("")
    
   let original = str.slice().toString().toLowerCase().replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, '').split("").join("")
   
   if (duplicado === original) {
       return true
   }
   
   else {
       return false
   }
}




palindrome("eye");