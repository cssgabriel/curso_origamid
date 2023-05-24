import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }: { id: number }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar esta foto?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { res, json } = await request(url, options);
      if (res.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button onClick={handleClick} className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
