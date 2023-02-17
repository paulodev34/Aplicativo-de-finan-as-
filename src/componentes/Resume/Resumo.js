import React from "react";
import * as C from "./style";
import ResumeItem from "../ResumeItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resumo = () => {
  return (
    <C.Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} />
      <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} />
      <ResumeItem title="Total" Icon={FaDollarSign} />
    </C.Container>
  );
};

export default Resumo;
