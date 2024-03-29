import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

declare global {
  interface Props {
    id?: number;
    single?: boolean;
    data?: { photo: Photo; comments: PhotoComments[] };
  }

  interface Photo {
    acessos: number;
    author: string;
    date: string;
    id: number;
    idade: string;
    peso: string;
    src: string;
    title: string;
    total_comments: string;
  }

  interface PhotoComments {
    comment_ID: string;
    comment_agent: string;
    comment_approved: string;
    comment_author: string;
    comment_author_IP: string;
    comment_author_email: string;
    comment_author_url: string;
    comment_content: string;
    comment_date: string;
    comment_date_gmt: string;
    comment_karma: string;
    comment_parent: string;
    comment_post_ID: string;
    comment_type: string;
    user_id: string;
  }
}

const PhotoComments = (props: Props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((com) => (
          <li key={com.comment_ID}>
            <b>{com.comment_author}: </b>
            <span>{com.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
