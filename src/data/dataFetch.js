// https://pix-gen-omega.vercel.app/data.json

// https://pix-gen-omega.vercel.app/category.json

export const fetchData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const res = await fetch("https://pix-gen-omega.vercel.app/data.json");
  const data = await res.json();
  return data;
};

export const fetchCategoryData = async () => {
  const res = await fetch("https://pix-gen-omega.vercel.app/category.json");
  const data = await res.json();
  return data;
};
