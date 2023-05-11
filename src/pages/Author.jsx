import React, { useState, useEffect } from "react";
import PublicationList from "@/components/PublicationList";
import publicationData from "@/data/publicationData";

const Author = () => {
  const [publicationState, setPublicationState] = useState();

  useEffect(() => {
    setPublicationState(publicationData);
  }, [publicationState]);

  return (
    <div>
      <h1>publications</h1>
      <ul>
        <PublicationList project={publicationState} />
      </ul>
    </div>
  )
}

export default Author;