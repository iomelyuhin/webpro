import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/utility";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/humburgermenu";
import "./scripts/anchorlink";