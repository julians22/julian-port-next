const baseUrl = "https://blogs-domain.deanabnerjul.com/wp-json/wp/v2";

export async function getCategories(parentId: number) {
  const response = await fetch(`${baseUrl}/categories?parent=${parentId}`);

  return response.json();
}

export async function getPosts(categoryId: number, _embed = false, page = 1) {
  let url = _embed
    ? `${baseUrl}/posts?categories=${categoryId}&_embed&fields=id,slug,title,modified`
    : `${baseUrl}/posts?categories=${categoryId}&fields=id,slug,title,modified`;

  url += `&page=${page}`;

  const response = await fetch(url);

  return response.json();
}

export async function getPostBySlug(slug: string) {
  const response = await fetch(`${baseUrl}/posts?slug=${slug}&_embed`);

  return response.json();
}
