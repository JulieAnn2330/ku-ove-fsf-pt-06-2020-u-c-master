SELECT
  topAlbums.year,
  topAlbums.postion,
  topAlbums.artist,
  topAlbums.album
FROM topAlbums
INNER JOIN top5000
ON topalbums.artist = top5000.artist
ORDER BY topAlbums.year;