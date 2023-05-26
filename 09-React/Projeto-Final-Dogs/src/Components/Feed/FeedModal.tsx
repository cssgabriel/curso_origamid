import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }: any) => {
  const { data, error, request, loading } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = PHOTO_GET(photo.id);
      return await request(url, options);
    }
    getData();
  }, [photo, request]);

  function handleOutsideClick(e: any) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
