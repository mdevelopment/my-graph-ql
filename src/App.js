import React from "react";
import { useQuery, gql } from "@apollo/client";

const SPACELAUNCH_QUERY = gql`
  {
    launchesPast(limit: 30) {
      id
      mission_name
      launch_site {
        site_name_long
      }
    }
  }

`;


export default function App() {
  const { data, loading, error } = useQuery(SPACELAUNCH_QUERY);


  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}><div style={{fontWeight:"Bold"}}>{launch.mission_name}</div> <div style={{display: "inline-block", paddingLeft:"0px"}}> {launch.launch_site.site_name_long}</div></li>
        ))}  
      </ul>
    </div>
  );
}