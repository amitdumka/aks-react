import axios from "axios";
import { BASE_URL } from "../../../../../_estore/URLConstants";

const API_NAME = "productItems";
export const API_URL = BASE_URL + "/api/" + API_NAME;

// CREATE =>  POST: add a new item to the server
export async function createItem(item) {
  return await axios.post(API_URL, item, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// READ
export async function getAllItems() {
  return await axios.get(API_URL);
}

export async function getById(id) {
  return await axios.get(`${API_URL}/${id}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function find(queryParams) {
  return await axios.get(`${API_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the item on the server
export async function updateItem(item, idName) {
  return await axios.put(`${API_URL}/${item[idName]}`, JSON.stringify(item), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
// DELETE => delete the item from the server
export async function deleteItem(id) {
  return await axios.delete(`${API_URL}/${id}`);
}

// DELETE Multiple item by ids
export async function deleteItems(ids) {
  return await axios.post(`${API_URL}/deleteMulti`, { ids });
}
