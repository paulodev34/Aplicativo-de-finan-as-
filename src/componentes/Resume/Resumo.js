import React from "react";
import * as C from "./style";
import ResumeItem from "../ResumeItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resumo = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entrada"
        Icon={FaRegArrowAltCircleDown}
        value={income}
      />
      <ResumeItem title="Saída" Icon={FaRegArrowAltCircleUp} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resumo;
