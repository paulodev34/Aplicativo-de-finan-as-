import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./style";

const Form = ({ handleAdd, transactionList, setTransactionList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.round() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e um valor!");
      return;
    } else if (amount < 1) {
      alert("Valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
      <Grid itens={transactionList} setItens={setTransactionList} />
    </>
  );
};

export default Form;
