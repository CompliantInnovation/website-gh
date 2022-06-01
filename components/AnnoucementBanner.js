import React from "react";

export default function AnnoucementBanner() {
  return (
    <header>
      <div className="annoucement">
        DocSpera Achieves &nbsp; <strong>SOC 2 Type II Accreditation</strong>{" "}
        &nbsp; for its Data Platform&nbsp;
        <strong>
          <a
            target="_blank"
            href="https://www.prweb.com/releases/2022/5/prweb18694588.htm"
          >
            READ THE ANNOUNCEMENT
          </a>
        </strong>
      </div>

      <style jsx>{`
        .annoucement {
          background: var(--blueDocspera);
          height: 50px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .annoucement a {
          color: white;
        }
        .annoucement a:visted {
          color: white;
        }
        .annoucement a:hover {
          color: white;
        }
      `}</style>
    </header>
  );
}
