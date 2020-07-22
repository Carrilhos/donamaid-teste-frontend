import React, { useState, useEffect } from "react";
import { Modal, Input, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Profile, ProfileData, Description } from "./homeStyles";
import "./index.css";
import logo from "../../assets/horizontal-branco.png";
import logo2 from "../../assets/donamaid-logo.svg";
import frajola from "../../assets/frajola.png";
import donie from "../../assets/donie.svg";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

export default function Profissional() {
  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 50
    }
  }));

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const preventDefault = event => event.preventDefault();

  return (
    <div>
      <Container>
        <div>
          <img src={logo} className="logo" />
          <Profile>
            <img src={frajola} className="image" />
            <div>
              <div className="containerX">
                <ProfileData className="profileData">
                  <div className="name">Frajola</div>
                  <p> Com a donamaid desde 2020</p>
                </ProfileData>
                <Description>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nec bibendum est, laoreet volutpat orci. Curabitur
                    non ultricies justo, vel congue nibh. Aliquam erat volutpat.
                    Aliquam vitae neque
                  </p>
                </Description>
              </div>
              <div className="buttonContainer">
                <button className="button" onClick={handleOpen}>
                  Quero contratar Frajola
                </button>
              </div>
            </div>
          </Profile>
        </div>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div style={modalStyle} className={classes.paper}>
            <div>
              <img src={donie} />
              <img src={logo2} />
              <div className="input">
                <Input
                  placeholder="digite seu email"
                  type="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <FiUser size={23} />
                    </InputAdornment>
                  }
                />
                <Input
                  placeholder="Digite sua senha"
                  type="password"
                  startAdornment={
                    <InputAdornment position="start">
                      <FiLock size={23} />
                    </InputAdornment>
                  }
                />
                <Button type="submit" variant="contained" color="secondary">
                  {" "}
                  Entrar{" "}
                </Button>
                <Link to="/">
                  <a>Esqueci minha senha</a>
                </Link>
                <div className="register">
                  Não possui cadastro? Faça{" "}
                  <Link>
                    <a>Aqui</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
      </Modal>
    </div>
  );
}
