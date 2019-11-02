/** @jsx jsx */
import { jsx } from "theme-ui";

export default props => (
  <button
    sx={{
      color: "background",
      backgroundColor: "primary",
      padding: "10px;"
    }}
    {...props}
  />
);
