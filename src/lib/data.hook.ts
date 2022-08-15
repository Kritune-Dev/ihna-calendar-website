import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useData() {
  const { data , error } = useSWR("api/eta", fetcher);
  return { data, error };
}