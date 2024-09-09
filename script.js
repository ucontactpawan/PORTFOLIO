var typed = new Typed('#element', {
    strings: ['Web Developer', 'Software Developer'],
    typeSpeed: 70,
  });

  const prevElement = document.querySelector(".prev")
  const nextElement = document.querySelector(".next")
  const imgContainerElement = document.querySelector(".img-container")
  const imgElement = document.querySelectorAll(".pr-img")

  //Event listener take three args event, call back and boolean.

  let currentImg = 1;
  let timeout;
  nextElement.addEventListener("click", ()=> {

    currentImg++;
    clearInterval(timeout)
    updateImg()
  })
  prevElement.addEventListener("click", ()=> {
    currentImg--
    clearTimeout(timeout)

    updateImg()
  })

  updateImg()

  function updateImg(){
    if(currentImg > imgElement.length){
      currentImg = 1;
    } else if (currentImg < 1){
      currentImg = imgElement.length

    }
    imgContainerElement.style.transform = `translateX(${-(currentImg -1) * 100}%)`

    timeout = setTimeout(() => {
      currentImg++
      updateImg()
    }, 2000)
  }