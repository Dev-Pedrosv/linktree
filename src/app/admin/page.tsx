"use client";

import { useState } from "react";

interface ListItem {
  id: string;
  brand: string;
  link: string;
  createdAt: string;
}

export default function Adm() {
  const [filters, setFilters] = useState({
    brand: "",
    link: "",
    accessedIn: "",
  });
  const [list, setList] = useState<ListItem[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFilters({ ...filters, [key]: event.target.value });
  };

  const filteredList = list.filter((item) => {
    return (
      item.brand.includes(filters.brand) &&
      item.link.includes(filters.link) &&
      item.createdAt.includes(filters.accessedIn)
    );
  });

  return (
    <div className="w-full min-h-screen bg-[#2E2E48] p-10">
      <h1>Last views</h1>

      <h2 className="mt-4">Filters</h2>

      <div className="flex justify-between gap-3 max-w-[1080px] mt-5">
        <input
          className="w-full p-3 rounded outline-none bg-gray-700 focus:outline-gray-500"
          placeholder="Brand"
          onChange={(e) => handleChange(e, "brand")}
          value={filters.brand}
        />
        <input
          className="w-full p-3 rounded outline-none bg-gray-700 focus:outline-gray-500"
          placeholder="Link"
          onChange={(e) => handleChange(e, "link")}
          value={filters.link}
        />
        <input
          type="date"
          className="w-full p-3 rounded outline-none bg-gray-700 focus:outline-gray-500"
          placeholder="Accessed in"
          onChange={(e) => handleChange(e, "accessedIn")}
          value={filters.accessedIn}
        />
      </div>

      <div className="grid grid-cols-3 max-w-[1080px] mt-10 bg-gray-700  rounded-tl-[5px] rounded-tr-[5px] px-4 py-2">
        <p>Brand</p>
        <p>Link</p>
        <p>Accessed in</p>
      </div>

      {filteredList.length > 0 && (
        <div className="border max-w-[1080px] border-slate-700 gap-4 flex flex-col p-4">
          {filteredList.map((item) => (
            <div className="grid grid-cols-3" key={item.id}>
              <p>{item.brand}</p>
              <p>{item.link}</p>
              <p>{item.createdAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
