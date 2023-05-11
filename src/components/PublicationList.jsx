import React, { useState, useEffect } from "react";
import Card from "@/pages/Card";
import publicationData from "@/data/publicationData";

const PublicationList = ({ project }) => {

  console.log("PublicationList project:", project);
  const [publicationDataState, setPublicationDataState] = useState([]);

  useEffect(() => {
    setPublicationDataState(publicationData);
  }, [])

  const pubs = publicationDataState.map((pub) =>
    <Card key={pub.title} project={pub} />
  )

  return (
    <ul>
      {pubs}
    </ul>
  )
}

export default PublicationList;