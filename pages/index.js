import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState } from "react";
import { TextField, FormControl, Button, Box } from "@mui/material";

function DataInput({ label, field, setField }) {
  return (
    <TextField
      style={{
        margin: "1rem 0 1rem 0",
      }}
      label={label}
      type="number"
      variant="outlined"
      onChange={(e) => setField(e.target.value)}
      value={field}
    />
  );
}

export default function Home() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const [field6, setField6] = useState("");
  const [field7, setField7] = useState("");
  const [field8, setField8] = useState("");
  const [field9, setField9] = useState("");
  const [field10, setField10] = useState("");
  const [field11, setField11] = useState("");
  const [field12, setField12] = useState("");
  const [field13, setField13] = useState("");
  const [field14, setField14] = useState("");
  const [field15, setField15] = useState("");

  const handleSubmit = (event) => {
    console.log("got here");
    console.log(event);
    console.log("field1", field1);
    console.log("field2", field2);
    console.log("field3", field3);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Group 2's Bankruptcy's Calculator" />
        <FormControl style={{ width: "70rem" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 3fr)",
              columnGap: 3,
              rowGap: 1,
              mb: "2rem",
            }}
          >
            <DataInput label={"LABEL 1"} field={field1} setField={setField1} />
            <DataInput label={"LABEL 2"} field={field2} setField={setField2} />
            <DataInput label={"LABEL 3"} field={field3} setField={setField3} />
            <DataInput label={"LABEL 4"} field={field4} setField={setField4} />
            <DataInput label={"LABEL 5"} field={field5} setField={setField5} />
            <DataInput label={"LABEL 6"} field={field6} setField={setField6} />
            <DataInput label={"LABEL 7"} field={field7} setField={setField7} />
            <DataInput label={"LABEL 8"} field={field8} setField={setField8} />
            <DataInput label={"LABEL 9"} field={field9} setField={setField9} />
            <DataInput
              label={"LABEL 10"}
              field={field10}
              setField={setField10}
            />
            <DataInput
              label={"LABEL 11"}
              field={field11}
              setField={setField11}
            />
            <DataInput
              label={"LABEL 12"}
              field={field12}
              setField={setField12}
            />
            <DataInput
              label={"LABEL 13"}
              field={field13}
              setField={setField13}
            />
            <DataInput
              label={"LABEL 14"}
              field={field14}
              setField={setField14}
            />
            <DataInput
              label={"LABEL 15"}
              field={field15}
              setField={setField15}
            />
          </Box>

          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </main>

      <Footer />
    </div>
  );
}
