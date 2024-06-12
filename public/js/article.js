const deleteButton = document.getElementById("delete-article");
const publishedAt = document.getElementById('published-at').innerText;

deleteButton.addEventListener("click", async () => {
  const confirmation = confirm("Voulez-vous vraiment supprimer cet article ?");

  if (confirmation) deleteArticle();

});

document.addEventListener('DOMContentLoaded', function() {
  const timeAgo = moment(publishedAt).fromNow();

  document.getElementById('time-ago').innerText = timeAgo;
});



const deleteArticle = async () => {

  const title = deleteButton
    .closest("body")
    .querySelector("h1")
    .innerText.toString();
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") 
    .replace(/\s+/g, "-") 
    .trim();

  console.log(slug);

  try {
    const response = await fetch(`/articles/${slug}`, {method: "DELETE"});

    window.location.href = "/articles"

  } catch (error) {
    console.error('Erreur réseau :', error);
  }
}
