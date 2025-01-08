const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  };
  
  export default fetchProducts;
  