import axios from "axios";

 

export const updateHolidays = (payload) => {

    return function (dispatch) {

        return axios.get(payload).then((response) => {

            console.log(response.data)

          dispatch({

            type: "DATA",

            payload: response.data,

          });

        });

    }  

};