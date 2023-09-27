"use client";

import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface ListItem {
  id: string;
  brand: string;
  link: string;
  createdAt: Date;
}

export default function Adm() {
  const [filters, setFilters] = useState({
    brand: "",
    link: "",
    accessedIn: "",
  });
  const [list, setList] = useState<ListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const list: ListItem[] = await fetch("/api/link").then((res) =>
          res.json()
        );
        console.log(list);
        setList(list);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFilters({ ...filters, [key]: event.target.value });
  };

  const filteredList = list.filter((item) => {
    return (
      item.brand.toLowerCase().includes(filters.brand.toLowerCase()) &&
      item.link.toLowerCase().includes(filters.link.toLowerCase()) &&
      format(new Date(item.createdAt), "yyyy-MM-dd")
        .toLowerCase()
        .includes(filters.accessedIn)
    );
  });

  return (
    <div className="w-full min-h-screen bg-[#2E2E48] p-10">
      <h1>Last views</h1>

      <h2 className="mt-4">Filters</h2>

      <div className="flex justify-between gap-3 max-w-[1280px] mt-5">
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

      {isLoading && <Loader2 className="animate-spin mx-auto mt-10" />}

      {!isLoading && (
        <>
          <div className="grid grid-cols-3 max-w-[1280px] mt-10 bg-gray-700  rounded-tl-[5px] rounded-tr-[5px] px-4 py-2">
            <p>Brand</p>
            <p>Link</p>
            <p className="text-end">Accessed in</p>
          </div>

          {filteredList.length > 0 && (
            <div className="border max-w-[1280px] border-slate-700 gap-4 flex flex-col p-4">
              {filteredList.map((item) => (
                <div className="grid grid-cols-3" key={item.id}>
                  <p>{item.brand}</p>
                  <p>{item.link}</p>
                  <p className="text-end">
                    {format(new Date(item.createdAt), "dd/MM/yyyy")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
