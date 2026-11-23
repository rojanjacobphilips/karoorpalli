export const eventsQuery = `*[_type == "parishEvent"] | order(date asc) {
  "slug": slug.current,
  title,
  date,
  time,
  place,
  excerpt,
  "image": image.asset->url,
  registrationOpen
}`;

export const eventBySlugQuery = `*[_type == "parishEvent" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  date,
  time,
  place,
  excerpt,
  "image": image.asset->url,
  registrationOpen
}`;

export const obituariesQuery = `*[_type == "obituary"] | order(date desc) {
  "slug": slug.current,
  name,
  house,
  age,
  date,
  funeral,
  burial,
  message,
  "photo": coalesce(photo.asset->url, photoUrl)
}`;

export const obituaryBySlugQuery = `*[_type == "obituary" && slug.current == $slug][0] {
  "slug": slug.current,
  name,
  house,
  age,
  date,
  funeral,
  burial,
  message,
  "photo": coalesce(photo.asset->url, photoUrl)
}`;

export const galleryAlbumsQuery = `*[_type == "galleryAlbum"] | order(year desc, title.en asc) {
  "slug": slug.current,
  title,
  year,
  imageUrls,
  images[] {
    _type,
    "type": select(_type == "image" => "image", "video"),
    "src": select(
      _type == "image" => asset->url,
      defined(file.asset) => file.asset->url,
      url
    ),
    "alt": coalesce(alt, ^.title)
  }
}`;

export const galleryAlbumBySlugQuery = `*[_type == "galleryAlbum" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  year,
  imageUrls,
  images[] {
    _type,
    "type": select(_type == "image" => "image", "video"),
    "src": select(
      _type == "image" => asset->url,
      defined(file.asset) => file.asset->url,
      url
    ),
    "alt": coalesce(alt, ^.title)
  }
}`;

export const adminEventsQuery = `*[_type == "parishEvent"] | order(date desc) {
  _id,
  "slug": slug.current,
  title,
  date,
  time,
  place,
  excerpt
}`;

export const adminObituariesQuery = `*[_type == "obituary"] | order(date desc) {
  _id,
  "slug": slug.current,
  name,
  house,
  age,
  date,
  funeral,
  burial,
  message,
  "photo": coalesce(photo.asset->url, photoUrl)
}`;

export const adminVideosQuery = `*[_type == "videoItem"] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  category,
  youtubeId,
  facebook,
  src
}`;

export const adminGalleryQuery = `*[_type == "galleryAlbum"] | order(year desc, title.en asc) {
  _id,
  "slug": slug.current,
  title,
  year,
  imageUrls
}`;

export const videosQuery = `*[_type == "videoItem"] | order(_createdAt desc) {
  "id": coalesce(slug.current, _id),
  title,
  category,
  "youtube": youtubeId,
  "src": coalesce(file.asset->url, src),
  facebook
}`;
