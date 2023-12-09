

export const getProductByCategory = (type) => {

    return fetch("https://store-game-server.onrender.com/api/product/getType-Pro/" + type, {
      method: "GET"
      }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }).then ((response) => {
      return response.data
    });
  
  };
  