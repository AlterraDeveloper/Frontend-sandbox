const popup = () => {
  const div = document.createElement("div");
  div.classList.add("popup");
  const span = document.createElement("span");
  span.innerText = "Success!";
  const icon = document.createElement("span");
  icon.classList.add("fa", "fa-check");
  div.appendChild(span);
  div.appendChild(icon);
  return div;
};

document
  .querySelector("#pwebcontact652_send")
  .addEventListener("click", (evt) => {
    evt.preventDefault();
    const elBtn = evt.currentTarget;

    const popupNode = document.querySelector(".popup");

    console.log(
      evt.pageX + elBtn.scrollLeft - elBtn.offsetLeft,
      evt.pageY + elBtn.scrollTop - elBtn.offsetTop
    );
    popupNode.style.left = `${evt.pageX + 20 - 100}px`;
    popupNode.style.top = `${evt.pageY + 20}px`;
    popupNode.style.display = "flex";
    document.body.appendChild(popupNode);
    setTimeout(() => {
      popupNode.style.display = "none";
    }, 2000);
  });
