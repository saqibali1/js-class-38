// for(let even=7;even<=82;even++){
// 	if ((even % 2) == 0)
// 	console.log(even);
// }


// var counter = 0;
// var line=[];

// for(var i = 7; i<=82; i++){
//   if(i%2==0){
//     if(line.length <5){
//     line[counter] = i;
//     counter++
//     }else{
//       console.log(line);
//       line=[];
//       counter=0;
//       line[counter] =i;
//     }
//   }
//   }
// console.log(line);



let count=0;
for(let number=7;number<=82;number++){
  if(number%2==0){
    count++;
  }
}

console.log(count);