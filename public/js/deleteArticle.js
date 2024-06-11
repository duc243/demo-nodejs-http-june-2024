const deleteButton = document.getElementById("delete-article");

deleteButton.addEventListener("click", async () => {
  const confirmation = confirm("Voulez-vous vraiment supprimer cet article ?");

  if (confirmation) {
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
      const response = await fetch(`/article/${slug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.href = '/articles';
      } else {
        console.error('Erreur lors de la suppression de l\'article');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  }
});
