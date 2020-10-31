$(document).ready(function () {

    console.log(parseInt(moment().format('H')))
    // Current day
    const currentTime = moment().format('Do MMMM YYYY')
    // Current time
    $("#currentTime").text(currentTime)
    // styling instead of CSS
    $("span").attr("style", "width: 75px")
    $("button").text("Submit")
    // Work day
    const times = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    // Time check in local storage 
    times.forEach(time => {
      const timeCheck = window.localStorage.getItem(time)
  
      const currentHour = moment().hour()
  
      console.log(currentHour)
      console.log(time)
      
      // If current hour is greater then time 
      if (currentHour > time) {
        // Time will change color based on past
        $(`#${time}`).addClass("bg-danger text-light")
        $(`#${time}`).attr("disabled", true)
        // If Time is current
      } else if (currentHour === time) {
        $(`#${time}`).addClass("bg-secondary text-light")
        // IF Time is future
      } else {
        $(`#${time}`).addClass("bg-success text-light")
      }
      
      // Set items to time - else if greater then 0
      if (timeCheck === null) {
        window.localStorage.setItem(time, "")
      } else if (timeCheck.length > 0) {
        $(`#${time}`).attr("value", window.localStorage.getItem(time))
      }
    })
  
  
  
    // jQuery for every form on submit function 
    $("form").on("submit", function (e) {
      e.preventDefault()
      // jQuery for text input connected to time / Value typed
      const time = e.target.querySelector("input").getAttribute("id")
      const text = e.target.querySelector("input").value
      // Saved to local storage
      window.localStorage.setItem(time, text)
    })
  })
  