//Media resize

export const smallImage = (imagePath, size) => {
  // Suppose to prevent error related to null properties of match
  if (!imagePath) return null;

  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
