
function calculateBmi() {
   let weight = document.getElementById('weight').value
   let height = document.getElementById('height').value

   let bmi = (weight / (height * height))
   console.log(bmi)
   
   document.getElementById('result').innerHTML = 'Your BMI is :'
   document.getElementById('output').innerHTML = bmi.toFixed()

   if (bmi < 18.5) {
      document.getElementById('message').innerHTML = 'You are underweight'
       } else if (bmi >= 18.5 && bmi < 24.9) {
      document.getElementById('message').innerHTML = 'You are healthy weight'
           } else if (bmi >= 25 && bmi < 29.9) {
      document.getElementById('message').innerHTML = 'You are overweight'
           } else {
      document.getElementById('message').innerHTML = 'You are obesity' 
      }

}

function reload() {
   window.location.reload()
}