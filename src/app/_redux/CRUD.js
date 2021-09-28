import axios from "axios";
import { BASE_URL } from "../../_estore/URLConstants";

// CREATE =>  POST: add a new item to the server
export async function createItem(url, item) {
  return await axios.post(BASE_URL + url, item, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}


export async function getById(url, id) {
  return await axios.get(`${BASE_URL}${url}/${id}`);
}

// READ
export async function getAllItems(url) {
  return await axios.get(BASE_URL + url);
}


// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function find(url, queryParams) {
  return await axios.get(`${BASE_URL}${url}/find`, { queryParams });
}

// UPDATE => PUT: update the item on the server
export async function updateItem(url, item, idName) {
  return await axios.put(
    `${BASE_URL}${url}/${item[idName]}`,
    JSON.stringify(item),
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}
// DELETE => delete the item from the server
export async function deleteItem(url, id) {
  return await axios.delete(`${BASE_URL}${url}/${id}`);
}

// DELETE Multiple item by ids
export async function deleteItems(url, ids) {
  return await axios.post(`${BASE_URL}${url}/$deleteMulti`, { ids });
}
