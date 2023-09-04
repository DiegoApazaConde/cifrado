
var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
var derdes,izdes,nnocifrado =[],ccifrado=[],indiceA=[],nocifrado,cifrado,indiceB=[]
function datos(){
    derdes = Number(document.getElementById("desder").value)
    nocifrado = (document.getElementById("cifrar").value).toLowerCase()
    cifrado = (document.getElementById("descifrar").value).toLowerCase()
}
const encriptar = () =>{
   datos()
   console.log(nocifrado);
   document.getElementById("descifrar").value = ""
   for(let i = 0 ;i<nocifrado.length;i++){
         indiceA=(letras.indexOf(nocifrado[i]))%27
         if(indiceA!==-1){
          valor = letras[indiceA+derdes];
         }
         else{
         valor = " "
         }
         ccifrado[i] = valor; 
         console.log(ccifrado[i]);       
   }
   document.getElementById("descifrar").value=ccifrado.join("");
}
const desencriptar=()=>{
   datos();
   console.log(cifrado);
   document.getElementById("cifrar").value = ""
   for(let m = 0;m<cifrado.length;m++){
       indiceB=(letras.indexOf(cifrado[m]))%27
       if(indiceB!==-1){
         if(indiceB-derdes < 0){
            indiceB = 27 + indiceB-derdes
         }
         else{
           indiceB = indiceB-derdes;
         }
         valor = letras[indiceB]
       }
       else{
         valor= " ";
       }
       nnocifrado[m] = valor; 
   }
   console.log(nnocifrado);
   document.getElementById("cifrar").value=nnocifrado.join("");
}

