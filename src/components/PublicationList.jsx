import React from "react";
import Card from "@/pages/Card";
import publicationData from "@/data/publicationData";

const PublicationList = () => {
  const pubs = publicationData.map((pub) =>
    <Card project={pub} />
  )
  return (
    <ul>
      {pubs}
    </ul>
  )
}

export default PublicationList;