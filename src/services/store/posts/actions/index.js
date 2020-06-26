import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'
export const SEARCH_POST = 'SEARCH_POST'

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?_limit=10`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}
//
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function searchPost(uid) {
  const request = axios.get(`${ROOT_URL}/posts/?userId=${uid}`);
  return {
    type: SEARCH_POST,
    payload: request
  }
}
