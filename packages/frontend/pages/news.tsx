import { Layout } from "@layouts/layout/layout";

interface NewsProps {
  data: any; // Replace 'any' with the actual type of your data if possible
}

const NewsPage: React.FC<NewsProps> = ({ data }) => {
  return (
    <Layout>
      <h1>Testing The Data from the backend</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const backendUrl = "http://localhost:3001/news-feed/v1/news"; // Adjust the API endpoint as needed

  try {
    const response = await fetch(backendUrl);
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default NewsPage;
