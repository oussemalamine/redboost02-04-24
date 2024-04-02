import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Review.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdDomain } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";
import { ImLocation } from "react-icons/im";

function Review({ setShowModal, showModal, data }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={showModal}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          sx: {
            width: "100%", // Default width
            height: "100%", // Default height
            backgroundColor: "#044c54",
            "@media (min-width: 600px)": {
              width: "30%", // Custom width for larger screens
              height: "90%", // Custom height for larger screens
            },
          },
        }}
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            color: "#ffffff", // White color for the title text
            textAlign: "center", // Center align the title
          }}
        >
          {"Detailed Review"}
        </DialogTitle>
        <DialogContent>
          <h2>
            {data.first_name}
            {data.last_name}
          </h2>
          <div className="review-inf">
            <h4>Contact</h4>
            <p>
              <FaPhone /> Tel : {data.phone}{" "}
            </p>
            <p>
              <MdEmail /> Email : {data.email}
            </p>
          </div>
          <div className="review-inf">
            <h4>StartUp Details</h4>
            <p>
              <MdDomain />
              Sector :{" "}
            </p>
            <p>
              <HiUsers />
              Employees :
            </p>
            <p>
              <HiUser /> Co-Founder :{" "}
            </p>
            <p>
              <ImLocation />
              Location :{" "}
            </p>
          </div>
          <div className="review-inf">
            <h4>Previous Work with RedStart</h4>
          </div>
        </DialogContent>
        <DialogActions>
          <button className="btn-Review" autoFocus onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Review;
