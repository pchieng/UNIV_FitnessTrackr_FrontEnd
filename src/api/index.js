const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api';


 export const registerNewUser = async (userObject) => {
    const url = `${baseURL}/users/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                username: userObject.user,
                password: userObject.password,
        }),
    });
    console.log(response);

    const json = await response.json();
    console.log(json);

    // localStorage.setItem('fitness_tracker_JWT', json.data.token)
    return json;
}

export const loginUser = async (userObject) => {
    const url = `${baseURL}/users/login`;
    const response = await fetch (url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: userObject.user,
                password: userObject.password,
            },
        }),
    });

    console.log(response);
    const json = await response.json();
    console.log(json);

    localStorage.setItem('fitness_tracker_JWT', json.data.token)
    return json;
}


export const getRoutines = async () => {
    const url = `${baseURL}/routines`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(result => {
        return result;
      })
      .catch(console.error);
  
    return response
  };


  export const getActivities = async () => {
      const url = `${baseURL}/activities`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error);

        return response;
  }