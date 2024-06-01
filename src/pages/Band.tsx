import React from "react";

const Band = () => {
  return (
    <>
      <div id="banddiv">
        <h1 id="bandh">The Band</h1>
        <p style={{ textAlign: "center", color: "gray" }}>
          <i>we love music</i>
        </p>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        {/* images */}
        <div id="bandimage">
          <div id="bandimagediv">
            <p>Name</p>
            <img src="/images/bandmember.jpg" alt="img" width={150} />
          </div>
          <div id="bandimagediv">
            <p>Name</p>
            <img src="/images/bandmember.jpg" alt="img" width={150} />
          </div>
          <div id="bandimagediv">
            <p>Name</p>
            <img src="/images/bandmember.jpg" alt="img" width={150} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Band;
