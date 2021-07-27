// Simplify fetch() method
export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        // If user does not set Headers use default options
        const defaultHeader = {
            accept: "application/json",
        };
        // This allows to abort a Fetch request manually
        const controller = new AbortController();
        options.signal = controller.signal;

        // Default method "GET", else user selection
        options.method = options.method || "GET";
        options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
        
        // If body exists then transform to JS Object, if no body, then delete that property
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        console.log(options)

        // Server has n (3s) to response, else abort fetch
        setTimeout(() => {
            controller.abort()
        }, 3000)
        return fetch(endpoint, options).then((res) => {
            if (res.ok) {
                console.log("Data fetch working!")
                return res.json() // Data fetch is here
            } else {
                // In case an error: Generate an error object to send as response
                return Promise.reject({
                    error: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Something went wrong, try later"
                })
            }
        }).catch((err) => err);
    };
    const get = (url, options = {}) => {
        return customFetch(url, options);
    }
    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options)
    }
    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options)
    }
    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options)
    };
    return {
        get, post, put, del
    }
}