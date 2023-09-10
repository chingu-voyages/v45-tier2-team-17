import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import "../../sass/_explore.scss";
import Search from "../../Components/Search";
import Table from "../../Components/Table/Table";
import StrikeByYearChart from "../../Components/Chart/StrikeByYear";

const Explore = () => {
  const { data } = useGlobalContext();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const filteredData = data.slice(0, 15);
  // console.log(filteredData);

  // const exampleData = {
  //   fall: "Fell",
  //   geolocation: { latitude: "50.775", longitude: "6.08333" },
  //   id: "1",
  //   mass: "21",
  //   name: "Aachen",
  //   nametype: "Valid",
  //   recclass: "L5",
  //   reclat: "50.775000",
  //   reclong: "6.083330",
  //   year: "1880-01-01T00:00:00.000",
  // };
  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Meteor id",
      accessorKey: "id",
    },
    {
      header: "Fall",
      accessorKey: "fall",
    },
    {
      header: "Type",
      accessorKey: "nametype",
    },
    {
      header: "Mass",
      accessorKey: "mass",
    },
    {
      header: "Recclass",
      accessorKey: "recclass",
    },
    {
      header: "Year",
      accessorKey: "year",
    },
    {
      header: "Reclong",
      accessorKey: "reclong",
    },
    {
      header: "Reclat",
      accessorKey: "reclat",
    },
  ];

  return (
    <main className="explore-page">
      <Search />
      <Table data={data} columns={columns} />
    </main>
  );
};

export default Explore;
