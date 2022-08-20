const API_BASE_URL = process.env.NODE_ENV !== 'production' 
    ? process.env.REACT_APP_API_BASE_URL_DEV 
    : process.env.REACT_APP_API_BASE_URL_PROD;

const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const NEWS_ACCESS_KEY = process.env.REACT_APP_NEWS_ACCESS_KEY;

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options);

        if (response.status < 200 || response.status > 399) {
            const {error} = await response.json();
            throw new Error(error)
        }

        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }
        return Promise.resolve(onCancel);
    }
} 

export async function createUser(user, signal) {
    const url = `${API_BASE_URL}/users/createUser`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(user),
        signal,
    };
    return await fetchJson(url, options, {});
}

export async function login(user, signal) {
    const url = `${API_BASE_URL}/users/login`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(user),
        signal,
    };
    return await fetchJson(url, options, {})
}

export async function listPostsByUser(userId, signal) {
    const url = `${API_BASE_URL}/users/${userId}/posts`;
    return await fetchJson(url, { signal }, {})
}

export async function readUser(userId, signal) {
    const url = `${API_BASE_URL}/users/${userId}`;
    return await fetchJson(url, { signal }, {})
}

export async function updateUser(userId, updatedUser, signal) {
    const url = `${API_BASE_URL}/users/${userId}`;
    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify(updatedUser),
        signal,
    };
    return await fetchJson(url, options, {})
}

export async function refreshToken(user, signal) {
    const url = `${API_BASE_URL}/users/refreshToken`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(user),
        signal,
    };
    return await fetchJson(url, options, {});
}

export async function logout(user, signal) {
    const url = `${API_BASE_URL}/users/logout`;
    const options = {
        method: "DELETE",
        body: JSON.stringify(user),
        signal,
    }
    return await fetchJson(url, options)
}

export async function listPosts(signal) {
    const url = `${API_BASE_URL}/posts`;
    return await fetchJson(url, { signal }, {});
}

export async function createPost(post, signal) {
    const url = `${API_BASE_URL}/posts`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(post),
        signal,
    };
    return await fetchJson(url, options, {});
}

export async function updatePost(postId, updatedPost, signal) {
    const url = `${API_BASE_URL}/posts/${postId}`;
    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify(updatedPost),
        signal,
    };
    return await fetchJson(url, options, {});
}

export async function deletePost(postId, signal) {
  const url = `${API_BASE_URL}/posts/${postId}`;
  const options = { method: "DELETE", signal };
  return await fetchJson(url, options);
}

export async function readPost(postId, signal) {
    const url =`${API_BASE_URL}/posts/${postId}`;
    return await fetchJson(url, { signal }, {});
}

export async function getNews(signal) {
    const url = `${NEWS_API_BASE_URL}/search?api-key=${NEWS_ACCESS_KEY}`;
    const returnedNews = await fetchJson(url, { signal }, {});
    return returnedNews.response.results
}