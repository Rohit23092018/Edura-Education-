function setFAQ() {

  var faqContainer = document.getElementById("faq-container");
  var selectCategory = document.getElementById("select-category");
  var paramerter = '';
  for (var index = 0; index < faqs.length; index++) {
    // const categoryOption = document.createElement('option');
    // const categoryLink = document.createElement('a');
    // categoryLink.href = "#" + faqs[index].category;
    // categoryLink.innerHTML = faqs[index].disp_name;
    // categoryOption.appendChild(categoryLink);
    // selectCategory.appendChild(categoryOption);
    const categoryLink = document.createElement('a');
    // categoryLink.href = "#" + faqs[index].category;
    categoryLink.innerHTML = faqs[index].disp_name;
    categoryLink.classList.add("dropdown-item");
    label = String(faqs[index].disp_name);
    catName = String(faqs[index].category);
    categoryLink.setAttribute("onclick", `setLabelAndScrollTo("` + label + `", "` + catName + `")`);
    selectCategory.appendChild(categoryLink);

    const categoryContainer = document.createElement('div');
    categoryContainer.id = faqs[index].category;
    const categoryHeader = document.createElement('h4');
    categoryHeader.classList.add("category-header", "mt-5", "py-1");
    categoryHeader.innerHTML = faqs[index].disp_name.toUpperCase();
    categoryContainer.appendChild(categoryHeader);
    createFaqAccordians(faqs[index], categoryContainer);
    faqContainer.appendChild(categoryContainer);
  }

  function createFaqAccordians(faqList, categoryContainer){
    var qList = faqList.ques_list;
    const faqAccordion = document.createElement('div');
    categoryContainer.appendChild(faqAccordion);
    for (var quesIndex = 0; quesIndex < qList.length; quesIndex++){
      const question = document.createElement('button');
      // question.id = "faq" + index;
      question.classList.add("accordion");
      question.innerHTML = qList[quesIndex].ques;
      faqAccordion.appendChild(question);
      const answer = document.createElement('div');
      // answer.id = "ans" + index;
      answer.classList.add("panel");
      answer.innerHTML = `<div class="p-4">` + qList[quesIndex].ans + `</div>`;
      faqAccordion.appendChild(answer);
    }
  }

  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("faq-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

}

// function filterFAQ(category){
//   var allFAQ = document.getElementsByClassName("faq");
//   if (category == "all"){
//     for (var i = 0; i < allFAQ.length; i++) {
//       allFAQ[i].classList.remove("hide-faq");
//     }
//   }
//   else{
//     var faqCategory = document.getElementsByClassName(category);
//     for (var i = 0; i < allFAQ.length; i++) {
//       allFAQ[i].classList.add("hide-faq");
//     }
//     for (var j = 0; j < faqCategory.length; j++) {
//       faqCategory[j].classList.remove("hide-faq");
//     }
//   }
// }