// import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head";

export const UserProfile = () => {
  const { user } = useParams();
  if (user)
    return (
      <section className="container mainSection">
        <Head title={user} description="Área do usuário" />
        <h1 className="title">{user}</h1>
        <Feed user={user} />
      </section>
    );
  else return null;
};
