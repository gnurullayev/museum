let navbarOppen = document.querySelector(".menu"),
    navbarClouse = document.querySelector(".clouse"),
    nav = document.querySelector(".nav"),
    navItem = document.querySelectorAll(".nav__item");

    navbarOppen.addEventListener("click", () => {
        nav.style.left ="0"
        navbarClouse.style.display = "block" 
        navbarOppen.style.display = "none" 
        console.log(nav)
    })

    navbarClouse.addEventListener("click", () => {
        nav.style.left ="-100%"
        navbarClouse.style.display = "none" 
        navbarOppen.style.display = "block"
        console.log(nav)
    })

    navItem.forEach(post => {
        post.addEventListener("click", () => {
            nav.style.left ="-100%"
            navbarClouse.style.display = "none" 
            navbarOppen.style.display = "block"
            console.log(post)
        })
    })



  let prev = document.querySelectorAll(".prev"),
  next = document.querySelectorAll(".next"),
  totalNumber = document.querySelectorAll(".total-number"),
  total = 1;
  console.log(prev)


    prev[0].addEventListener("click", () => {
        total -= 1
        totalNumber[0].innerHTML = total
        console.log(total)
    })   


  
    next[0].addEventListener("click", () => {
        total += 1
        totalNumber[0].innerHTML = total
        console.log(total)
    })  
    
    prev[1].addEventListener("click", () => {
        total -= 1
        totalNumber[1].innerHTML = total
        console.log(total)
    })   


  
    next[1].addEventListener("click", () => {
        total += 1
        totalNumber[1].innerHTML = total
        console.log(total)
    }) 

