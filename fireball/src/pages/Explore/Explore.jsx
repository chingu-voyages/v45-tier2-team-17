import React from "react";
import { useGlobalContext } from "../../context";
import Search from "../../Components/Search";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal/Modal";

const Explore = () => {
  const { filteredData, filterPopup, setFilterPopup } = useGlobalContext();

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
      <>
        {filterPopup ? (
          <Modal
            onClick={() => {
              setFilterPopup(false);
            }}
          >
            <Search />
          </Modal>
        ) : (
          <></>
        )}
      </>
      <button className="apply-filter-btn" onClick={() => setFilterPopup(!filterPopup)}>apply filter</button>
      <Table data={filteredData} columns={columns} />
    </main>
  );
};

export default Explore;
