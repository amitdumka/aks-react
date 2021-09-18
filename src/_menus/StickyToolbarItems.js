import React from "react";
import {Link} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

function StickyToolbarItems() {
    return (
        <>
            <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="layout-tooltip">Layout Builder</Tooltip>}
        >
          <li className="nav-item mb-2" data-placement="left">
            <Link
              to="/builder"
              className="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary"
            >
              <i className="flaticon2-gear"></i>
            </Link>
          </li>
        </OverlayTrigger>

        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="documentations-tooltip">Documentation</Tooltip>}
        >
          <li className="nav-item mb-2" data-placement="left">
            <a
              className="btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aprajitaretails.in/"
            >
              <i className="flaticon2-telegram-logo"></i>
            </a>
          </li>
        </OverlayTrigger>
      
        </>
    )
}

export default StickyToolbarItems
