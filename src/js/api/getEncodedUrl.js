export default function getEncodedUrl(nextPageUrl) {
  const nextPageParse = JSON.parse(nextPageUrl);
  return encodeURIComponent(JSON.stringify(nextPageParse));
}
