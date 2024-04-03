import axios from "axios";
import {
  DELETETHREAD_FAIL,
  DELETETHREAD_REQ,
  DELETETHREAD_SUCCESS,
  LOGINREQ,
  LOGINSUCCESS,
  THREADIDFAIL,
  THREADIDREQ,
  THREADIDSUCCESS,
} from "./actionTypes";

export const Getallmails = (token) => (dispatch) => {
  dispatch({ type: LOGINREQ });
  return axios
    .get(`https://hiring.reachinbox.xyz/api/v1/onebox/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: LOGINSUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchThread = (id, token) => (dispatch) => {
  dispatch({ type: THREADIDREQ });
  return axios
    .get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: THREADIDSUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: THREADIDFAIL });
    });
};

export const DeleteThread = (thread_id, token) => (dispatch) => {
  dispatch({ type: DELETETHREAD_REQ });

  return axios
    .delete(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({ type: DELETETHREAD_SUCCESS });
      alert(res.data.message);
    })
    .catch((err) => {
      dispatch({ type: DELETETHREAD_FAIL });
    });
};
