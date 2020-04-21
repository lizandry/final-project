export function fetchAllUsers() {
    return fetch('/users', {
      headers: {
        Accept: "application/json"
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/users') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}.`
        );
      }
    });
  }