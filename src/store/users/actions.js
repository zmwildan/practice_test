import { CALL_API } from "../middlewares/api"
import { objToQuery } from "string-manager"

// function to fetch user from api
export function fetchUsers(filter, username) {
  return {
    [CALL_API]: {
      type: GET_USERS,
      filter,
      method: "get",
      url: `/api/users/${username}/repos`
    }
  }
}

// function to fetch user detail from api
export function fetchUserDetail(username) {
  return {
    [CALL_API]: {
      type: GET_USERS_DETAIL,
      filter: username,
      method: "get",
      url: `/api/users/${username}`
    }
  }
}

// function to like
export function follow(username, follow) {
  return {
    type: FOLLOW,
    extradata: {
      follow,
      username
    }
  }
}

export const GET_USERS = "GET_USERS"
export const GET_USERS_DETAIL = "GET_USERS_DETAIL"
export const FOLLOW = "FOLLOW"
