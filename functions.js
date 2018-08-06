document.onkeydown = function(e) {
   const nums = "0123456789";
   const letters = "abcdefghijklmnopqrstuvwxyz";
   const key = e.key;

   switch(true) {
        case nums.includes(key):
            document.getElementById(key).play();
            break;
        case letters.includes(key):
            document.getElementById(key.toUpperCase()).play();
            break;
        default:
            console.log("No sound for that key");
            break;
   }
};