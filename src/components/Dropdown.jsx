import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
// import AuthorData from "./AuthorData";

function AuthorDropdown({}) {
  //   const [selected, setSelected] = useState(null);
  //   const handleSelect = (eventKey) => {
  //     setSelected(eventKey);
  //     onChange?.(eventKey);
  //   };
  //   return (
  //     <div className="dropdown">
  //       <Dropdown onSelect={handleSelect}>
  //         <Dropdown.Toggle variant="light" id="dropdown-basic">
  //           {selected || "Select an Author:"}
  //         </Dropdown.Toggle>
  //         <Dropdown.Menu>
  //           {AuthorData.map((author) => (
  //             <Dropdown.Item key={author.authorId} eventKey={author.authorName}>
  //               {author.authorName}
  //             </Dropdown.Item>
  //           ))}
  //         </Dropdown.Menu>
  //       </Dropdown>
  //     </div>
  //   );
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AuthorDropdown;
