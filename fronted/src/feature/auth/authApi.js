export function createUser(userData) {
    console.log(userData);
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        resolve({ data });
    });
}

export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
    try{
        const response = await fetch('http://localhost:8080/auth/check', {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
            const data = await response.json();
            resolve({ data });
          } else {
            const error = await response.text();
            // console.log("call",JSON.parse(error).message);
            reject(JSON.parse(error).message);
        }
    } catch (error) {
          reject( error );
        }
    })
}

export function loginUser(loginInfo) {

    console.log(loginInfo);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
    });
}
  