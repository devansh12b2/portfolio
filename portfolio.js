let check=0;
function Nav() {
   if(!check)
   {
       check=1;
       document.getElementById("nav").style.width="250px";
   } 

   else
   {
       check=0;
       document.getElementById("nav").style.width="0px";
   }
}