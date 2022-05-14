import fetch from "node-fetch";

const apiUrlBase: string = "https://api.pipedrive.com/v1";

interface INewUser {
  name: string;
  email: string;
  active_flag: boolean;
}

interface IResultNewUser {
  sucess: string;
  data: object;
}

const promise = <T>(fetchPromise: any): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    fetchPromise
      .then((result: any) => {
        result.json().then((jsonResult: any) => {
          resolve(jsonResult as Promise<T>);
        });
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

const fetchApiNewUser = <T>(url: string): Promise<T> => {
  return promise(fetch(url));
};

const getUser = async (): Promise<IResultNewUser[]> => {
  return await await fetchApiNewUser(apiUrlBase);
};

if (require.main === module) {
  (async () => {
    console.log("Hello World");
  })().catch((err: any) => {
    console.log(err);
  });
}

// route create new user         https://api.pipedrive.com/v1/users
// login route                   https://api.pipedrive.com/v1/
// token auth                    140d8747a28ef59c997cc263985369a92d615546
