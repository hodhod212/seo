/* import { API_BASE_URL, BEARER_BASE_TOKEN } from "../../hooks/yelp-api/config";

export const getStaticProps = async () => {
  try {
    const res = await fetch(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${BEARER_BASE_TOKEN}`,
        Origin: "localhost",
        withCredentials: true,
      },
    });
    const data = await res.json();
    console.log(data);
    return { props: { yelp: data } };
  } catch (error) {
    console.log(error);
  }
}; */
const CoffeeStore = () => {
  return (
    <div>
      <h1>CoffeeStore</h1>
    </div>
  );
};

export default CoffeeStore;
