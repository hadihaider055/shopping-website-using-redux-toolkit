import React from "react";
import Navbar from "../Navbar";
import { ShoesData } from "./Data";
import { useDispatch } from "react-redux";
import { Add_To_Basket } from "../../Global Controller";
import { item } from "../../Slice Types";
import banner from "../../Assets/shoe banner.jpg";
import "./style.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "50px 10px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (data: item) => {
    dispatch(Add_To_Basket(data));
  };

  return (
    <div>
      <Navbar />
      <img src={banner} alt="Shoe Banner" className="bg-img" title="Banner" />

      <div className="shoes__data" style={{ marginTop: "100px" }}>
        {ShoesData.map((shoe: item, ind: number) => {
          return (
            <Card
              className={classes.root}
              key={ind}
              style={{ display: "inline-block" }}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {shoe.name[0]}
                  </Avatar>
                }
                title={shoe.name}
                subheader="November 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image={shoe.src}
                title={shoe.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {shoe.desc}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 15px",
                }}
              >
                <div>
                  <h2>${shoe.price}</h2>
                </div>
                <div>
                  <IconButton
                    aria-label="add to cart"
                    onClick={() => handleClick(shoe)}
                  >
                    <LibraryAddIcon />
                  </IconButton>
                </div>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
