import Navbar from "../Navbar";
import notfound from "../../Assets/404 Page.jpg";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { displayState, item } from "../../Slice Types";
import { Remove_From_Basket } from "../../Global Controller";
import "./style.css";
const Checkout = () => {
  let checkout = useSelector((state: displayState) => state.baskets.basket);
  const dispatch = useDispatch();

  const handleClick = (item: item) => {
    dispatch(Remove_From_Basket(item));
  };

  return (
    <>
      <div>
        <div className="checkout__items">
          {checkout.length > 0 ? (
            checkout.map((curr: item, ind: number) => {
              return (
                <div key={ind}>
                  <Paper
                    elevation={3}
                    style={{
                      maxWidth: "660px",
                      margin: "40px auto",
                      padding: "5px 20px",
                      display: "flex",
                      flexFlow: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ margin: "0 auto" }}>
                      <img
                        src={curr.src}
                        alt={curr.name}
                        style={{
                          width: "150px",
                          height: "150px",
                          textAlign: "center",
                        }}
                      />
                    </div>
                    <div style={{ width: "300px" }}>
                      <h1>${curr.price}</h1>
                      <h3>{curr.name}</h3>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        width: "200px",
                        margin: "0 auto",
                      }}
                    >
                      <Button
                        onClick={() => handleClick(curr)}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        size="small"
                      >
                        Delete
                      </Button>
                    </div>
                  </Paper>
                </div>
              );
            })
          ) : (
            <div style={{ margin: "100px auto" }}>
              <img src={notfound} alt="not found" className="notfound-img" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Checkout;
