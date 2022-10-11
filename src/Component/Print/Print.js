import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import useGroups from "../../Hooks/Groups/useGroups";
import "./print.css";

const Print = () => {
  const [Groups, setGroups] = useGroups();
  console.log(Groups);
  const ref = useRef();
  return (
    <div className="print-1">
      this is print
      <div className="print-2">
        <div ref={ref} className="print-3 mx-auto border-1">
          <div className="mx-auto">
                <h3>ATIF SUPER MART</h3>
                <p>address skdosfanfkdsmnlkmdsa
                    lkdfdsnlkdsnkl
                </p>
          </div>
          <div>
                content
          </div>
          <div>
                body list
          </div>
          <div>
            sales
          </div>
          <div>
            foter
          </div>
         
        </div>
      </div>
      <ReactToPrint
        trigger={() => <button className="btn btn-xsm">print data</button>}
        content={() => ref.current}
      />
    </div>
  );
};

export default Print;



{/* <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Group ID</th>
                  <th>Group Name</th>
                  <th>_id</th>
                </tr>
              </thead>
              <tbody>
                {Groups.map((red) => (
                  <tr>
                    <th>{red.Group_ID}</th>
                    <td>{red.Group_Name}</td>
                    <td>{red._id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div> */}