// Print a multiplication table (1-10) using nested loops.


for(let i=1 ; i<=10 ; i++){
  console.log(`Table of ${i}`)
  for(let j=1 ; j<=10 ; j++){
    console.log(`  ${i} * ${j} : ${i*j}`)
  }
}