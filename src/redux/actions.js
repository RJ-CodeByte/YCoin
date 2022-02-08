export const GET_FLAGS = 'GET_FLAGS';
export const GET_CURRENCY = 'GET_CURRENCY';


const api_url = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json";
const api_url2 = "https://openexchangerates.org/api/currencies.json";

export const getAllData = () => {
    try {
  
      return async dispatch => {
        const result = await fetch(api_url,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const json = await result.json();
        // console.log(Object.keys(json));
        // const urlArray=json;
        // console.log(json)
        if (json) {
          dispatch({
            type: GET_FLAGS,
            payload: json,
          });
        } else {
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };

export const getAllCurrency = () => {
    try {
  
      return async dispatch => {
        const result = await fetch(api_url2,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const json = await result.json();
        console.log(Object.keys(json));
        const urlArray=Object.keys(json);
        // console.log(json)
        if (json) {
          dispatch({
            type: GET_CURRENCY,
            payload: urlArray,
          });
        } else {
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };