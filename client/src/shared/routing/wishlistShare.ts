const WISHLIST_QUERY_PARAM = 'wishlist';
const LOCAL_WISHLIST_TOKEN = 'local';

export const hasWishlistDialogQuery = (search: string) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.has(WISHLIST_QUERY_PARAM);
};

export const buildWishlistDialogPath = (
  pathname: string,
  search: string,
  token: string = LOCAL_WISHLIST_TOKEN
) => {
  const searchParams = new URLSearchParams(search);
  searchParams.set(WISHLIST_QUERY_PARAM, token);
  const queryString = searchParams.toString();

  return queryString ? `${pathname}?${queryString}` : pathname;
};

export const clearWishlistDialogPath = (pathname: string, search: string) => {
  const searchParams = new URLSearchParams(search);
  searchParams.delete(WISHLIST_QUERY_PARAM);
  const queryString = searchParams.toString();

  return queryString ? `${pathname}?${queryString}` : pathname;
};
