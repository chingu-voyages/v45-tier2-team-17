import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import "../../sass/_explore.scss";
import Table from "../../Components/Table/Table";

const Explore = () => {
  const { data, fetchData } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = data.slice(0, 15);
  console.log(filteredData);

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
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
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
      header: "Reclong",
      accessorKey: "reclong",
    },
    {
      header: "Reclat",
      accessorKey: "reclat",
    },
    {
      header: "Year",
      accessorKey: "year",
    },
  ];

  return (
    <div className="explore-page">
      <Table data={filteredData} columns={columns} />
    </div>
  );
};

export default Explore;
