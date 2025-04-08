import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./textBOX.css"
const TextBoxe = () => {
  return (
    <div>
      <div className="error-container">
        <div className="error-content">
          <h1>
            <span className="numberErorr">5</span>
            <span>
              <img src="/cookie-left.png" alt="" className="cookie" />
            </span>
            <span>
              <img src="/cookie-right.png" alt="" className="cookie" />
            </span>
            <span>
              <img src="/cookie-right.png" alt="" className="cookie" />
            </span>
          </h1>
        </div>
        <div className="text-ERorr" >
          <h2 style={{ fontSize: "38px" }}>Internal Server Error</h2>
          <p style={{ fontSize: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Facilisis
            viverra laoreet <br />
            lorem diam sed egestas tincidunt dolor.{" "}
          </p>
          <Button
            endIcon={<ChevronLeftIcon />}
            variant="contained"
            color="warning"
            sx={{ mt: 2, height: "45px", borderRadius: "15px" }}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextBoxe;
