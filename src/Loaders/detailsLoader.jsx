export const detailsLoader = async ({ params }) => {
  const res = await fetch("/allAppData.json");
  const data = await res.json();

  const app = data.find((item) => item.id === parseInt(params.id));
  if (!app) {
    throw new Response("Not Found");
  }
  return app;
};
