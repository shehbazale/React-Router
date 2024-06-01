import React from "react";

const Tour = () => {
  return (
    <>
      <div id="mainDivTour">
        <div id="tourmaindiv">
          <h1 id="bandh">Tour Dates</h1>
          <p style={{ textAlign: "center", color: "gray" }}>
            <i>Remember to book your tickets!</i>
          </p>
          <div id="tourmonth">
            <p className="month borderBottom ">
              September <span className="badge">Sold out</span>
            </p>
            <p className="month borderBottom">
              October <span className="badge">Sold out</span>
            </p>
            <p className="month">November</p>
          </div>
          {/* images */}
          <div className="tourImage">
            <div className="tourImagediv">
              <img src="/images/bandmember.jpg" alt="img" width={220} />
              <div className="divItems">
                <h4>New York</h4>
                <p>Fri 27 Nov 2016</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button>Buy Tickets</button>
              </div>
            </div>
            <div className="tourImagediv">
              <div className="divItems">
                <img src="/images/bandmember.jpg" alt="img" width={220} />
                <h4>New York</h4>
                <p>Fri 27 Nov 2016</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button>Buy Tickets</button>
              </div>
            </div>
            <div className="tourImagediv">
              <div className="divItems">
                <img src="/images/bandmember.jpg" alt="img" width={220} />
                <h4>New York</h4>
                <p>Fri 27 Nov 2016</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button>Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
