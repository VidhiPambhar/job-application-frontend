import axios from "axios";
import React, { useEffect, useState } from "react";
function ApplicationList() {
  const [data, setResponse] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8001/api/users/all/`).then((response) => {
      setResponse(response.data);
    });
  }, []);


  return (
    <div class="relative overflow-sm">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Board Univericity
            </th>
            <th scope="col" class="px-6 py-3">
              Graduation
            </th>
            <th scope="col" class="px-6 py-3">
              HSC
            </th>
            <th scope="col" class="px-6 py-3">
            SSC
            </th>
            <th scope="col" class="px-6 py-3">
              SSC
            </th>
            <th scope="col" class="px-6 py-3">
              Graduation
            </th>
            <th scope="col" class="px-6 py-3">
              Master degree
            </th>
            <th scope="col" class="px-6 py-3">
             Percentage
            </th>
            <th scope="col" class="px-6 py-3">
              Year
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.allEducationDetails.map((item) => {
            return (
              <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">{item.board_univercity}</td>
                  <td class="px-6 py-4">{item.hsc}</td>
                  <td class="px-6 py-4">{item.ssc}</td>
                  <td class="px-6 py-4">{item.graduation}</td>
                  <td class="px-6 py-4">{item.master_degree}</td>

                  <td class="px-6 py-4">{item.percentage}</td>

                  <td class="px-6 py-4">{item.year}</td>

                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationList;
