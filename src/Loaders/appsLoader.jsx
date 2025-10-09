export const appsLoader = async () => {
  const response = await fetch("/allAppData.json");
  if (!response.ok) throw new Error("Failed to fetch apps data");
  const data = await response.json();
  return data;
};
