async function fetchAPI(endpoint, { method = 'GET', body, headers: customHeaders, ...customConfig } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (customHeaders) {
      Object.assign(headers, customHeaders);
    }
  
    const config = {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
      ...customConfig,
    };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, config);
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      throw new Error(data.message || response.statusText);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export default fetchAPI;
  