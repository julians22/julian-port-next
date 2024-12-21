const baseUrl = "https://blogs-domain.deanabnerjul.com/wp-json/wp/v2";

export async function getCategories(parentId: number) {
  const response = await fetch(`${baseUrl}/categories?parent=${parentId}`);

  return response.json();
}

export async function getPosts(categoryId: number, _embed = false) {
  const url = _embed
    ? `${baseUrl}/posts?categories=${categoryId}&_embed`
    : `${baseUrl}/posts?categories=${categoryId}`;
  const response = await fetch(url);

  return response.json();
}

export async function getPostBySlug(slug: string) {
  const response = await fetch(`${baseUrl}/posts?slug=${slug}`);

  return response.json();
}
